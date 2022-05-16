import { TourneyBuilder } from "../../src/builder/TourneyBuilder.js";

/**
 * OMT2021
 *
 * https://osu.ppy.sh/community/forums/topics/1311342
 * https://docs.google.com/spreadsheets/d/181MCTGNsp4c_-y0DvY0o1dZGJumcnUqq5x2lj3qbIQ0
 */
const tourney = new TourneyBuilder()
  .setupStaffs(staffs => staffs
    .addStaffs('host', 13600612, 4042706)
    .addStaffs('pooler', 2582531, 1501956, 2681361, 6088976)
    .addStaffs('replayProvider', 7673764, 7525949, 13472074, 5286213, 4845266, 5182050, 7562902)
    .addStaffs('streamer', 9364594, 7062729, 5585377, 10167542)
    .addStaffs('commentator', 14279913, 6231292, 10584780, 11234664, 10167542, 8691555, 6408049)
    .addStaffs('referees', 9676089, 9364594, 3765632, 5091293, 8688777, 9288833, 9351030, 15293336, 8872267, 7276846)
    .addStaffs('graphicDesigner', 7138499, 7062729)
    .addStaffs('statistician', 9534110))
  .setupBrackets(bracket => bracket
    .addBracket('qualifier', mappools => mappools
      .addBeatmaps('NM', 2710347, 2455776, 2963964, 2807033)
      .addBeatmaps('HD', 570965, 2964623)
      .addBeatmaps('HR', 887145, 37658)
      .addBeatmaps('DT', 761541, 155049))
    .addBracket('groupStages', mappools => mappools
      .addBeatmaps('NM', 2792203, 635679, 2580586, 442037, 3046403)
      .addBeatmaps('HD', 1699377, 1427700)
      .addBeatmaps('HR', 3046469, 1494458)
      .addBeatmaps('DT', 528555, 2855311, 67895)
      .addBeatmaps('FM', 1085026, 48096)
      .addBeatmaps('TB', 731905))
    .addBracket('ro16', mappools => mappools
      .addBeatmaps('NM', 2834295, 3054838, 1846365, 2622415, 3037832)
      .addBeatmaps('HD', 2358559, 1924965, 216272)
      .addBeatmaps('HR', 860472, 2185350, 2946539)
      .addBeatmaps('DT', 2889189, 2535687, 93964)
      .addBeatmaps('FM', 205282, 671521, 3041760)
      .addBeatmaps('TB', 2711757))
    .addBracket('quarterfinals', mappools => mappools
      .addBeatmaps('NM', 3056371, 2994531, 2379722, 2347615, 2808550)
      .addBeatmaps('HD', 2798816, 3082319, 2590758)
      .addBeatmaps('HR', 2978156, 2286129, 775362)
      .addBeatmaps('DT', 2397393, 2750914, 155120)
      .addBeatmaps('FM', 2560356, 1493052, 2468140)
      .addBeatmaps('TB', 2700108))
    .addBracket('semifinals', mappools => mappools
      .addBeatmaps('NM', 2386178, 2324475, 2034284, 1856461, 2830531, 2857447)
      .addBeatmaps('HD', 2937712, 1725155, 1973466)
      .addBeatmaps('HR', 2466476, 2453711, 2992841)
      .addBeatmaps('DT', 3094575, 3094638, 72516, 2096920)
      .addBeatmaps('FM', 2883742, 3094675, 3046639)
      .addBeatmaps('TB', 2938138))
    .addBracket('finals', mappools => mappools
      .addBeatmaps('NM', 2540002, 2948446, 2731139, 1938335, 2006819, 2929650)
      .addBeatmaps('HD', 1608452, 2249551, 2978860)
      .addBeatmaps('HR', 2719837, 2486379, 3004787)
      .addBeatmaps('DT', 1785848, 91462, 2937778, 2422377)
      .addBeatmaps('FM', 2454944, 1431533, 2250471)
      .addBeatmaps('TB', 1353936))
    .addBracket('grandFinals', mappools => mappools
      .addBeatmaps('NM', 2676534, 3105306, 2136959, 2717891, 3118171, 3007522)
      .addBeatmaps('HD', 2742940, 2942890, 2473365)
      .addBeatmaps('HR', 2478036, 2960558, 2790751)
      .addBeatmaps('DT', 2771743, 1930097, 66514, 2993045)
      .addBeatmaps('FM', 2296178, 2260687, 2634008)
      .addBeatmaps('TB', 3119221)))
  .build();

export default tourney;
