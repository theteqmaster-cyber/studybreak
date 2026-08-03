// Studybreak LocalStorage Data Engine
(function (global) {
    'use strict';

    const STORAGE_KEY_LOGS = 'studybreak_logs';
    const STORAGE_KEY_STATS = 'studybreak_card_stats';

    const COURSE_METADATA = {
        'scs2108': {
            code: 'SCS2108',
            name: 'Object Oriented Software Concepts & Development',
            target: 3
        },
        'scs2111': {
            code: 'SCS2111',
            name: 'Data Communications & Networking',
            target: 3
        },
        'scs2110': {
            code: 'SCS2110',
            name: 'Research Methods',
            target: 3
        }
    };

    function getLogs() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_LOGS);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            console.error('Error reading studybreak_logs:', e);
            return [];
        }
    }

    function saveLogs(logs) {
        try {
            localStorage.setItem(STORAGE_KEY_LOGS, JSON.stringify(logs));
        } catch (e) {
            console.error('Error writing studybreak_logs:', e);
        }
    }

    function getCardStats() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_STATS);
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            console.error('Error reading studybreak_card_stats:', e);
            return {};
        }
    }

    function saveCardStats(stats) {
        try {
            localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
        } catch (e) {
            console.error('Error writing studybreak_card_stats:', e);
        }
    }

    function getTodayStr() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function getTimeBucket() {
        const hour = new Date().getHours();
        return (hour >= 6 && hour < 18) ? 'day' : 'night';
    }

    const StudyEngine = {
        COURSE_METADATA: COURSE_METADATA,

        logOpen: function (courseId, cardId) {
            if (!courseId || !cardId) return;
            const today = getTodayStr();
            const timeBucket = getTimeBucket();
            const nowIso = new Date().toISOString();

            // 1. Add log entry
            const logs = getLogs();
            logs.push({
                id: Date.now() + '_' + Math.random().toString(36).substring(2, 6),
                course_id: courseId,
                card_id: cardId,
                timestamp: nowIso,
                date_str: today,
                time_bucket: timeBucket,
                scroll_depth: 0
            });
            saveLogs(logs);

            // 2. Update card stats
            const stats = getCardStats();
            const key = `${courseId}_${cardId}`;
            if (!stats[key]) {
                stats[key] = {
                    course_id: courseId,
                    card_id: cardId,
                    total_opens: 0,
                    max_scroll_depth: 0,
                    last_opened: nowIso
                };
            }
            stats[key].total_opens = (stats[key].total_opens || 0) + 1;
            stats[key].last_opened = nowIso;
            saveCardStats(stats);

            return stats[key];
        },

        logScroll: function (courseId, cardId, depth) {
            if (!courseId || !cardId) return;
            const stats = getCardStats();
            const key = `${courseId}_${cardId}`;
            if (stats[key]) {
                stats[key].max_scroll_depth = Math.max(stats[key].max_scroll_depth || 0, parseInt(depth, 10) || 0);
                saveCardStats(stats);
            }
        },

        getSummary: function () {
            const today = getTodayStr();
            const logs = getLogs();

            // Count today's opens per course
            const counts = {};
            logs.forEach(log => {
                if (log.date_str === today) {
                    counts[log.course_id] = (counts[log.course_id] || 0) + 1;
                }
            });

            const coursesSummary = {};
            let totalCount = 0;
            let totalTarget = 0;
            let allGreen = true;
            let anyRed = false;

            Object.keys(COURSE_METADATA).forEach(cId => {
                const meta = COURSE_METADATA[cId];
                const cnt = counts[cId] || 0;
                const target = meta.target;
                totalCount += cnt;
                totalTarget += target;

                let status = 'green';
                if (cnt < target) {
                    status = 'red';
                    anyRed = true;
                    allGreen = false;
                } else if (cnt === target) {
                    status = 'yellow';
                    allGreen = false;
                }

                const percent = Math.min(100, Math.round((cnt / target) * 1000) / 10);

                coursesSummary[cId] = {
                    code: meta.code,
                    name: meta.name,
                    target: target,
                    count: cnt,
                    status: status,
                    percent: percent
                };
            });

            let overallStatus = 'yellow';
            if (anyRed) {
                overallStatus = 'red';
            } else if (allGreen) {
                overallStatus = 'green';
            }

            const overallPercent = Math.min(100, Math.round((totalCount / totalTarget) * 1000) / 10);

            return {
                ok: true,
                today: today,
                courses: coursesSummary,
                overall_status: overallStatus,
                overall_target: totalTarget,
                overall_count: totalCount,
                overall_percent: overallPercent
            };
        },

        getCampaignHeatmap: function () {
            const campaignStart = '2026-07-29';
            const campaignEnd = '2026-08-21';
            const todayStr = getTodayStr();
            const logs = getLogs();

            // Aggregate daily counts per course
            const dailyMap = {};
            logs.forEach(log => {
                if (log.date_str >= campaignStart && log.date_str <= campaignEnd) {
                    if (!dailyMap[log.date_str]) {
                        dailyMap[log.date_str] = {};
                    }
                    dailyMap[log.date_str][log.course_id] = (dailyMap[log.date_str][log.course_id] || 0) + 1;
                }
            });

            const grid = [];
            let current = new Date(campaignStart + 'T00:00:00');
            const endTs = new Date(campaignEnd + 'T23:59:59');

            while (current <= endTs) {
                const year = current.getFullYear();
                const month = String(current.getMonth() + 1).padStart(2, '0');
                const day = String(current.getDate()).padStart(2, '0');
                const dStr = `${year}-${month}-${day}`;

                const coursesCounts = dailyMap[dStr] || {};
                const scs2108 = coursesCounts['scs2108'] || 0;
                const scs2111 = coursesCounts['scs2111'] || 0;
                const scs2110 = coursesCounts['scs2110'] || 0;
                const total = scs2108 + scs2111 + scs2110;

                let status = 'red';
                if (dStr > todayStr) {
                    status = 'future';
                } else {
                    if (scs2108 >= 3 && scs2111 >= 3 && scs2110 >= 3) {
                        status = (total > 9) ? 'green' : 'yellow';
                    } else {
                        status = 'red';
                    }
                }

                grid.push({
                    date: dStr,
                    status: status,
                    total_reads: total,
                    is_today: (dStr === todayStr)
                });

                current.setDate(current.getDate() + 1);
            }

            // Streak calculation
            let streak = 0;
            const pastGrid = grid.filter(g => g.date <= todayStr).reverse();
            for (const g of pastGrid) {
                if (g.status === 'green' || g.status === 'yellow') {
                    streak++;
                } else {
                    if (g.date === todayStr) {
                        continue;
                    }
                    break;
                }
            }

            return {
                ok: true,
                campaign_start: campaignStart,
                campaign_end: campaignEnd,
                streak: streak,
                grid: grid
            };
        },

        getCardStatsMap: function () {
            return getCardStats();
        }
    };

    global.StudyEngine = StudyEngine;
})(window);
