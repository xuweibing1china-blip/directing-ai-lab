/* 课堂故事配置；首版内容仅为匿名占位演示，最终剧情与图片须由课程主创确认。 */
window.STORY_CONFIG = {
  title: "门外的纸箱",
  placeholderNotice: "占位剧情 · 待主创确认",
  timerSeconds: 20,
  scene: {
    ariaLabel: "走廊里，一扇蓝色房门前放着纸箱、雨伞和一张便条的图形占位场景",
    note: "请勿开门",
  },
  stages: [
    { key: "start", label: "观察", eyebrow: "第一幕 · 先看，不急着解释", heading: "门外发生了什么？", prompt: "安静观察 20 秒。记下你看到的事实，以及你脑中冒出的第一个故事。", visibleClues: [] },
    { key: "clue-1", label: "线索一", eyebrow: "第二幕 · 加入一个事实", heading: "线索一：门是从里面锁上的", prompt: "你的解释改变了吗？哪些是画面事实，哪些只是推测？", visibleClues: ["门是从里面锁上的。"] },
    { key: "clue-2", label: "线索二", eyebrow: "第三幕 · 寻找隐藏关系", heading: "线索二：纸箱底部是湿的", prompt: "六组三人各提一个反转思路。必须同时解释门锁、纸箱和雨伞。", visibleClues: ["门是从里面锁上的。", "纸箱底部是湿的，但走廊地面是干的。"] },
    { key: "ending", label: "结局", eyebrow: "第四幕 · 占位结局", heading: "箱子不是被送来的，而是刚被救回来", prompt: "占位解释：邻居在雨中捡到受伤的小猫，屋主怕开门惊动它，便请邻居把临时猫窝放在门外。此剧情仅用于验证流程，待主创确认。", visibleClues: ["门是从里面锁上的。", "纸箱底部是湿的，但走廊地面是干的。", "便条写给准备来接猫的救助志愿者。"] },
    { key: "review", label: "复盘", eyebrow: "第五幕 · 回到证据", heading: "哪些线索真的支持这个解释？", prompt: "逐条分类：画面中可见的事实、后来补充的事实、我们自己添加的假设。还能构造别的合理结局吗？", visibleClues: ["事实 ≠ 解释", "新线索会改变旧故事", "好反转必须能回扣已有证据"] },
  ],
};
