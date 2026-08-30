const projects = [
  {
    id: "project-01",
    cover: "1_cover.png",
    title: { zh: "Stanby", en: "Stanby" },
    type: { zh: "产品设计、交互设计、AI辅助设计", en: "Product Design, UX/UI Design, AI-assisted Design" },
    year: "2026",
    categories: ["pd", "aigc"],
    intro: {
      zh: "「Stanby」是一款面向跨境观演女性的出行辅助产品，填补了票务、攻略与通用地图之间的服务空白。它将分散在社交平台和地图中的场馆规则、寄存、入场、厕所及散场交通等信息，转化为随时间和位置变化的行动指引，帮助用户减少搜索与临场判断成本，降低因信息不足造成时间、经济损失及错过演出的风险。",
      en: "Stanby supports women travelling across borders for live events. It turns scattered venue rules, luggage storage, entry, restroom and post-show transit information into timely, location-aware actions—reducing search and on-site decisions while helping users avoid delays, extra costs and missed performances."
    },
    content: [
      {
        type: "accordion", open: true,
        title: { zh: "项目动机", en: "Motivation" },
        body: {
          zh: "越来越多年轻人会独自前往陌生城市看演出。与普通旅行不同，这类行程时间固定、容错率低，一旦在入场、寄存或散场交通上判断失误，就可能错过演出，最终导致高额的经济损失、时间和精力消耗，以及强烈的焦虑、懊恼等负面情绪。现有平台分别提供订票、导航和攻略，却缺少一套围绕演出全程组织的行动指引。StanBy 因此聚焦跨境观演，为独自出行的女性提供及时、可靠的现场信息。\n\n这一判断并不只是基于个人经历。我们在与不同城市、不同观演习惯的用户交流后发现，许多人在独自前往陌生城市看演出时，都会遇到类似的入场、寄存和散场交通问题。这说明它并非个别用户的偶发困扰，而是跨城市、跨场馆普遍存在的观演体验问题。",
          en: "More young people are travelling alone to unfamiliar cities for live events. These trips have fixed schedules and little room for error: a wrong decision about entry, luggage storage or late-night transport can mean missing the show and losing significant time and money. Existing services cover tickets, maps or travel tips separately, but none organises the full event journey.\n\nInterviews with audiences across different cities revealed the same problems repeatedly. This is not an isolated inconvenience, but a common experience across venues and destinations. Stanby therefore focuses on reliable, actionable guidance for women attending events abroad."
        }
      },
      {
        type: "accordion",
        title: { zh: "用户痛点", en: "User Pain Points" },
        body: {
          zh: "相比于攻略，用户缺的是能够直接执行的信息。场馆入口、行李规定、地铁电梯、寄存点和末班车等内容散落在帖子、评论和群聊里，还可能已经过期；通用地图则只能告诉用户如何到达，无法解决拖着行李走哪个出口、散场后如何快速离开等具体问题。在语言不通、网络不稳或现场拥挤时，用户需要的是明确的下一步指引，而不是继续搜索。",
          en: "Users need information they can act on, not another guide to search. Venue entrances, bag policies, station lifts, storage points and last trains are scattered across posts and group chats and may already be outdated. General maps show how to arrive, but not which exit works with luggage or how to leave after a crowded show. Under language, network and time pressure, the next step must be explicit."
        }
      },
      {
        type: "accordion",
        title: { zh: "功能简述", en: "Product Overview" },
        body: {
          zh: "用户添加演出和住宿信息后，StanBy 会生成一份可离线使用的“观演行动包”。出发前，产品按时间整理场馆规定、行李安排和交通截止时间；到达现场后，自动切换为场馆地图，标出无障碍出口、寄存点、入场口、厕所及散场路线。零散攻略会被转化为带有位置、时效和来源的结构化信息，现场用户也可以通过简单确认或纠错帮助更新。产品不做泛社区和机酒比价，核心是让用户在正确的时间直接知道该往哪里走、该做什么。",
          en: "After users add an event and accommodation, Stanby creates an offline action pack. Before departure it organises venue rules, luggage plans and transport deadlines; on site it switches to a venue map showing accessible exits, storage, entrances, restrooms and post-show routes. Scattered tips become structured information with location, timing and sources, while visitors can confirm or correct details. The product stays focused on one question: what should I do next, here and now?"
        }
      },
      {
        type: "accordion",
        title: { zh: "商业模式 / GTM", en: "Business Model & GTM" },
        body: {
          zh: "核心功能免费，通过 eSIM、行李寄存、交通卡和接送服务等场景化推荐获得佣金，后期可与票务平台、主办方及场馆合作提供官方观演指南。冷启动阶段先覆盖首尔、东京等热门目的地的少数核心场馆，通过粉丝社群、攻略博主和票务渠道分发“单场演出生存指南”。每场活动带来新用户和现场数据，同一场馆的数据又能持续复用，再逐步扩展至音乐节和体育赛事。",
          en: "Core guidance remains free, with commission from relevant services such as eSIMs, luggage storage, transit cards and transfers. Later partnerships with ticketing platforms, organisers and venues can provide official event guides. Launch begins with a small set of high-demand venues in Seoul and Tokyo, distributing event-specific survival guides through fan communities, creators and ticketing channels. Each event adds users and live data that can be reused at the venue before expanding to festivals and sports."
        }
      },
      { type: "strips", groups: [
        ["1-1-1.webp", "1-1-2.webp", "1-1-3.webp", "1-1-4.webp"],
        ["1-1-5.webp", "1-1-6.webp", "1-1-7.webp", "1-1-8.webp"]
      ] }
    ]
  },
  {
    id: "project-02",
    cover: "2_cover.png",
    title: { zh: "Unfold", en: "Unfold" },
    type: { zh: "产品设计、交互设计、AI辅助设计", en: "Product Design, UX/UI Design, AI-assisted Design" },
    year: "2026",
    categories: ["pd", "aigc"],
    intro: {
      zh: "「Unfold」是一款基于临床应用的渐进式肌肉放松法（PMR）的肩颈可穿戴设备。它面向办公与学习场景，通过感知压力相关的持续紧张，以轻微振动提醒用户，并引导肌肉完成“收紧—释放”的放松过程。用户可在App中接收提醒，并根据自身需求调整PMR训练部位。",
      en: "Unfold is a shoulder-and-neck wearable based on Progressive Muscle Relaxation. In work and study settings, it detects sustained tension, prompts users with a subtle vibration and guides a short tense–release exercise. The companion app delivers reminders and lets users adapt PMR training to their needs."
    },
    content: [
      {
        type: "accordion", open: true,
        title: { zh: "项目动机", en: "Motivation" },
        body: {
          zh: "从捏捏、Tangle、指尖解压按键等解压玩具不断涌现，可以看出人们对即时缓解压力、获得感官放松的需求正在持续增长，也反映出当代人长期处于较高的压力水平。但这类产品的解压原理主要依赖重复按压、揉捏或触觉刺激，通过转移注意力和提供短暂的感官反馈来缓解当下情绪，并没有真正作用于压力产生时的生理紧张状态。因此，解压产品的普及证明了用户对压力干预的真实需求，也暴露出市场仍缺少一种能够从生理层面识别并缓解紧张的专业解决方案。\n\n长期办公和学习中，压力往往先表现为无意识的肩颈紧绷，但用户通常在疲劳或疼痛出现后才察觉。现有穿戴设备更多停留在“监测压力”，冥想、拉伸和 PMR 又依赖用户主动开始，缺少一种能够在紧张发生当下及时介入的工具。\n\nUnfold 因此聚焦一个明确机会：在不打断工作流的前提下，帮助用户更早察觉身体紧张，并立即完成短时放松。",
          en: "The popularity of tactile stress toys reveals a strong need for immediate relief, yet most only redirect attention through repetitive sensory feedback. They do not address the physical tension produced by stress.\n\nDuring prolonged work or study, stress often appears first as unconscious shoulder and neck tension, noticed only after fatigue or pain. Wearables tend to stop at monitoring, while meditation, stretching and PMR require users to initiate a session. Unfold intervenes at the moment tension occurs, helping users notice it earlier and complete a brief release without leaving their workflow."
        }
      },
      {
        type: "accordion",
        title: { zh: "用户痛点", en: "User Pain Points" },
        body: {
          zh: "核心用户是长期伏案、持续高认知投入的学生与脑力劳动者。对他们而言，最大的问题是压力发生时往往没有意识，也很难主动停下手头任务去做完整训练。现有解压方式通常要求用户主动打开 App、离开当前任务或安排额外时间，而健康手环又多以数据反馈为主，难以直接处理当下的紧张状态。",
          en: "The primary users are students and knowledge workers who spend long periods at a desk. They often do not notice stress as it happens and cannot easily stop for a full exercise. Most relief methods require opening an app, leaving the task or scheduling extra time, while health wearables mainly report data rather than relieving tension in the moment."
        }
      },
      {
        type: "accordion",
        title: { zh: "功能简述", en: "Product Overview" },
        body: {
          zh: "Unfold 通过肩颈可穿戴设备识别持续的肌肉紧张，并以轻微振动提醒用户。用户接受后，设备以 PMR 为核心，通过“收紧—释放—感受”的短时引导帮助肩颈退出持续紧绷状态。\n\n整体形成“检测—提醒—放松—学习”的闭环：设备负责低打扰的即时干预，App 则记录紧张趋势、识别高压时段，并逐步调整提醒阈值和训练节奏。核心差异是把放松嵌入压力真正发生的场景中。",
          en: "The wearable identifies sustained muscular tension and sends a subtle vibration. Once accepted, it guides a short PMR sequence of tense, release and notice.\n\nTogether, the device and app create a detect–prompt–relax–learn loop. The wearable handles quiet real-time intervention; the app records patterns, identifies high-stress periods and gradually adapts thresholds and training rhythm. Relaxation happens inside the moment of stress, not after it."
        }
      },
      {
        type: "accordion",
        title: { zh: "商业模式 / GTM", en: "Business Model & GTM" },
        body: {
          zh: "产品初期以 ToC 硬件销售为主，基础监测、PMR 引导和个性化功能随设备提供，不强制订阅。市场定位优先放在工作与学习中的压力管理，而非医疗治疗，以降低使用和认知门槛。",
          en: "The initial model is direct-to-consumer hardware. Core monitoring, PMR guidance and personalisation come with the device without a mandatory subscription. Positioning focuses on everyday stress management at work and study rather than medical treatment, keeping adoption and expectations accessible."
        }
      },
      { type: "embed", provider: "site", src: "https://game-flaky-40151730.figma.site/", ratio: 56.25, fixedHeight: 1070, title: "Unfold interactive prototype" }
    ]
  },
  {
    id: "project-03",
    cover: "3_cover.png",
    title: { zh: "便意", en: "doodie" },
    type: { zh: "产品设计、交互设计、AI辅助设计", en: "Product Design, UX/UI Design, AI-assisted Design" },
    year: "2025",
    categories: ["pd", "aigc"],
    intro: {
      zh: "「便意」是一款面向年轻用户的排便与盆底健康管理 App。产品通过趣味 IP 降低生理话题的羞耻感，以排便记录、趋势分析和健康提示帮助用户持续了解身体状态，并结合提肛训练与智能坐垫反馈，将日常记录进一步转化为可执行的健康管理行为。",
      en: "doodie is a bowel and pelvic-floor health app for young users. A playful character lowers the stigma around bodily topics, while logs, trend analysis and health guidance build long-term awareness. Pelvic-floor training and smart-cushion feedback turn daily records into practical health actions."
    },
    content: [
      {
        type: "accordion", open: true,
        title: { zh: "项目动机", en: "Motivation" },
        body: {
          zh: "排便是重要的日常健康信号，却很少被持续管理。一方面，这类话题仍带有明显羞耻感；另一方面，现有健康 App 多关注饮食、运动和睡眠，排便类产品又常停留在简单记录。\n\n「便意」希望用趣味 IP 降低记录和讨论门槛，再通过数据分析与训练反馈，把“记录排便”延伸为长期的排便与盆底健康管理。",
          en: "Bowel movements are an important daily health signal, but they are rarely tracked over time. The topic still carries stigma, while mainstream health apps focus on diet, exercise and sleep and specialist tools often stop at basic logging. doodie uses a playful character to make recording easier, then combines trend analysis and training feedback to support long-term bowel and pelvic-floor health."
        }
      },
      {
        type: "accordion",
        title: { zh: "用户痛点", en: "User Pain Points" },
        body: {
          zh: "排便状态零散、容易漏记，单次异常也难以判断；进行盆底训练时，用户又很难确认动作是否正确、训练是否有效。现有工具大多只解决记录，没有形成从发现问题到采取行动的完整闭环。",
          en: "Bowel information is fragmented and easy to forget, and a single unusual result is hard to interpret. During pelvic-floor training, users cannot tell whether the movement is correct or effective. Existing tools mainly record data without connecting insight to action."
        }
      },
      {
        type: "accordion",
        title: { zh: "功能简述", en: "Product Overview" },
        body: {
          zh: "用户通过简单选择记录每日排便状态，App 自动整理长期趋势并提供健康提示；当连续出现异常变化时，给予风险提醒和就医建议，而非直接进行 AI 诊断。\n\n用户也可进行提肛训练，并连接智能坐垫获取运动次数、持续时间等实时反馈。结合提醒、打卡与 AI 智能体，产品形成“记录 → 分析 → 建议 → 训练 → 反馈”的健康管理闭环。",
          en: "Users log daily bowel status through simple selections. The app organises long-term trends and provides health guidance; persistent changes trigger risk alerts and advice to seek care rather than an AI diagnosis.\n\nUsers can also practise pelvic-floor exercises with real-time repetition and duration feedback from a smart cushion. Reminders, check-ins and an AI agent complete a log–analyse–guide–train–feedback loop."
        }
      },
      {
        type: "accordion",
        title: { zh: "商业模式 / GTM", en: "Business Model & GTM" },
        body: {
          zh: "产品采用免费App + 智能硬件的ToC模式。基础记录、趋势查看和健康内容免费开放，智能提肛坐垫则面向有进一步训练需求的用户提供可视化反馈。\n\n冷启动阶段以「大便超人」IP 和趣味健康内容进行社交传播与线下活动获客；后续可与健康品牌、体检及健康机构合作，逐步扩展长期健康管理服务。",
          en: "The product combines a free consumer app with optional smart hardware. Logging, trends and health content remain free; the training cushion adds visual feedback for users who want more support. Launch uses the doodie character, playful health content and offline events for acquisition, followed by partnerships with health brands, screening providers and care organisations."
        }
      },
      { type: "link", label: { zh: "查看 AI辅助设计的工作流记录", en: "View the AI-assisted Design Workflow" }, href: "https://my.feishu.cn/docx/TQeGd7wvdoPkLCxwAA7cWuGCnyg?from=from_copylink" },
      { type: "images", rows: [
        ["3-1.webp"], ["3-2.webp"], ["3-3.png"], ["3-4.png"], ["3-5.png"], ["3-6.webp"], ["3-7.png"],
        ["3-8.webp"], ["3-9.png"], ["3-10.png"], ["3-11.png"], ["3-12.png"], ["3-13.webp"]
      ], gap: false }
    ]
  },
  {
    id: "project-04",
    cover: "4_cover.png",
    title: { zh: "蘑咕", en: "蘑咕" },
    type: { zh: "产品设计、交互设计、AI辅助设计", en: "Product Design, UX/UI Design, AI-assisted Design" },
    year: "2025",
    categories: ["pd", "aigc"],
    intro: {
      zh: "「蘑咕」是一款面向拖延症人群的任务督促产品。用户提前设置任务与截止时间，若到期仍未完成，系统将通过好友、平台用户或 AI 语音主动来电提醒，以更难被忽视的外部介入打断拖延，帮助用户完成真正紧迫、必须及时执行的任务。",
      en: "蘑咕 is an accountability product for people who procrastinate. Users set a task and deadline in advance; if it remains unfinished, a friend, community member or AI voice calls them. This harder-to-ignore intervention interrupts delay and helps users act on genuinely urgent tasks."
    },
    content: [
      {
        type: "accordion", open: true,
        title: { zh: "项目动机", en: "Motivation" },
        body: {
          zh: "大多数效率工具擅长帮助用户规划任务，却很难解决拖延症们最核心的问题：知道该做什么，也设置了提醒，但到了最后一刻仍然选择忽略。对作业提交、起床赶车、材料上传等紧急任务来说，普通通知很容易被划掉，习惯养成类工具也无法解决当下的执行问题。\n\n蘑咕因此不做另一款 Todo List，而是专注于帮助用户真正把任务做起来：当用户无法依靠自我提醒行动时，引入外部介入，推动用户立即开始。",
          en: "Most productivity tools help people plan, but not act. Users know what to do and set reminders, yet still dismiss them at the last moment. For urgent tasks such as submitting work, catching transport or uploading documents, ordinary notifications and habit trackers do not solve immediate execution. 蘑咕 is therefore not another to-do list: it introduces external intervention when self-reminders fail, pushing users to begin now."
        }
      },
      {
        type: "accordion",
        title: { zh: "用户痛点", en: "User Pain Points" },
        body: {
          zh: "核心用户是明知任务紧迫，却经常拖到最后仍无法行动的年轻用户。他们并不缺计划工具，真正缺少的是从“知道该做”到“现在去做”之间的外部推动。\n\n现有提醒仍由用户自己决定是否执行；请朋友监督虽然更有效，却有人情成本，也无法保证随时响应。因此用户需要的是一种提前授权、到点自动发生的外部监督机制。",
          en: "The core users understand that a task is urgent but still cannot act until the last moment. Planning is not the gap; external momentum between knowing and doing is. Self-managed reminders are easy to ignore, while asking friends creates social cost and unreliable availability. Users need supervision that is authorised in advance and activates automatically."
        }
      },
      {
        type: "accordion",
        title: { zh: "功能简述", en: "Product Overview" },
        body: {
          zh: "用户设置任务、截止时间，并投入一定积分作为承诺成本。若到期后仍未完成，系统自动启动外部提醒：好友或平台用户可以接取任务，通过语音电话提醒；如果无人响应，则由 AI 语音补位。\n\n核心差异不在于电话，而在于用户在发布任务时就已经授权系统在失败后介入。真实来电比普通通知更难忽视，也让私人任务转化为具有轻度社会责任的承诺。用户也可选择仅好友可见或仅接收 AI 语音，降低陌生人通话带来的压力。",
          en: "Users set a task and deadline, then stake points as a commitment. If the task is still incomplete, the system activates an external reminder: a friend or community member can call, with an AI voice as fallback. The key is advance consent to intervention after failure. A real call is harder to dismiss and gives a private task light social accountability, while friend-only and AI-only options protect comfort and privacy."
        }
      },
      {
        type: "accordion",
        title: { zh: "商业模式 / GTM", en: "Business Model & GTM" },
        body: {
          zh: "早期不依赖陌生人社区，而从大学宿舍、学习小组和好友监督等熟人场景切入，利用好友邀请建立小圈，AI 电话负责兜底，避免冷启动阶段没人提醒。\n\n增长可围绕帮朋友治拖延的天然传播场景，通过好友邀请、任务挑战和社交内容裂变。核心监督功能免费，高频用户可订阅更高任务额度与个性化 AI 提醒，同时通过 IP 语音包、角色提醒和定制来电等数字内容获得增值收入。",
          en: "Launch begins with trusted groups—dorms, study teams and friends—rather than relying on strangers. Invitations form small accountability circles, while AI calls guarantee coverage during cold start. Growth builds on the natural act of helping friends overcome procrastination through invitations, challenges and social content. Core supervision stays free; subscriptions add task capacity and personalised AI prompts, with character voices and custom calls as digital add-ons."
        }
      },
      { type: "link", label: { zh: "查看 产品文档", en: "View Product Documentation" }, href: "https://my.feishu.cn/wiki/RzafwBJYWiRidNkKs8Dc5DA5nBh?from=from_copylink" },
      { type: "embed", provider: "canva", src: "https://www.canva.cn/design/DAG6izvROok/dKgjqhHTIX5B0nSF30bwRA/view?embed", ratio: 56.25, title: "蘑咕 project overview" }
    ]
  },
  {
    id: "project-05",
    cover: "5_cover.png",
    title: { zh: "Metro Compass", en: "Metro Compass" },
    type: { zh: "产品设计、交互设计、AI辅助设计", en: "Product Design, UX/UI Design, AI-assisted Design" },
    year: "2026",
    categories: ["pd", "aigc"],
    intro: {
      zh: "「Metro Compass」是一套面向陌生城市地铁乘客的站内导航系统。它将站内原有的柱体改造成轻量化导航终端，结合与手机 AR 导航，在进站、找站台、候车和下车等关键节点提供与当前位置匹配的信息，帮助游客和初次到访者降低判断成本，减少迷路、误乘和反复确认。",
      en: "Metro Compass is an in-station navigation system for passengers using an unfamiliar metro. It turns existing columns into lightweight wayfinding terminals and links them with mobile AR, providing location-aware guidance at entry, platform search, boarding and exit to reduce confusion, repeated checking and wrong trains."
    },
    content: [
      {
        type: "accordion", open: true,
        title: { zh: "项目动机", en: "Motivation" },
        body: {
          zh: "在陌生城市乘坐地铁时，用户进入车站后需要持续完成入口确认、站台寻找、方向判断和列车核对。现有地图 App 更擅长提供路线规划，但进入复杂站点后，导航信息很难与用户眼前的真实空间持续对应。\n\nMetro Compass 将导航能力延伸到站内关键节点，通过即时确认当前位置和下一步行动，降低陌生乘客的判断成本。",
          en: "Inside an unfamiliar metro, passengers must confirm entrances, locate platforms, judge direction and verify trains. Map apps plan routes well, but their guidance becomes difficult to match with the physical space inside complex stations. Metro Compass extends wayfinding to key in-station moments, confirming the current position and next action when decisions are made."
        }
      },
      {
        type: "accordion",
        title: { zh: "用户痛点", en: "User Pain Points" },
        body: {
          zh: "目标用户包括游客、初次到访者和偶尔使用陌生线路的乘客。进入车站后，他们需要在手机、指示牌、线路图和站台信息之间反复切换。\n\n出口、方向、终点站和列车类型分散在不同媒介中，用户需要自行理解和拼接。复杂室内空间、陌生语言和线路规则进一步增加认知负担，使进站到上车之间的短距离成为最容易犹豫和出错的环节。",
          en: "Tourists and occasional passengers repeatedly switch between phones, signs, line maps and platform displays. Exits, directions, terminal stations and train types are distributed across different media and must be mentally combined. Complex interiors, unfamiliar language and local rules add cognitive load, making the short journey from entrance to train the point most prone to hesitation and error."
        }
      },
      {
        type: "accordion",
        title: { zh: "功能简述", en: "Product Overview" },
        body: {
          zh: "Metro Compass 利用车站内已有柱体和关键节点设置轻量化导航终端，并与手机端形成连续路径。乘客可快速确认当前位置、目标线路、方向和站台信息；在结构复杂的站点，手机 AR 导航进一步将路线对应到真实空间。\n\n到达站台后，系统重点确认站台方向、列车终点和当前班次；进入车厢后，手机继续提供行程进度和下车提醒。产品的核心在于围绕进站、找站台、上车和下车几个关键决策节点，持续提供与当前位置匹配的信息。",
          en: "Lightweight terminals at existing columns and decision points connect with a continuous mobile route. Passengers quickly confirm position, line, direction and platform; at complex stations, mobile AR maps the route onto the real environment. On the platform, the system verifies direction, terminus and service; onboard, the phone continues with journey progress and exit reminders. Guidance stays tied to location throughout entry, platform search, boarding and arrival."
        }
      },
      {
        type: "accordion",
        title: { zh: "商业模式 / GTM", en: "Business Model & GTM" },
        body: {
          zh: "Metro Compass 更适合作为面向地铁运营方和城市交通管理机构的 B2B/B2G 数字化导航方案。实际使用者是乘客，采购方主要是地铁运营公司或交通主管部门，其价值在于改善游客体验、减少误乘和问询，并降低复杂站点的人工服务压力。\n\n落地初期可优先选择游客比例高、线路复杂的核心站点，在现有柱体、屏幕和运营数据基础上部署，降低改造成本；通过寻路时间、误乘率和人工问询量验证效果后，再扩展至更多线路和城市。",
          en: "Metro Compass is a B2B/B2G wayfinding system for metro operators and transport authorities. Passengers are the users, while operators purchase it to improve visitor experience, reduce wrong trains and enquiries, and relieve staff pressure at complex stations. Pilots begin at tourist-heavy hubs, reusing existing columns, screens and operational data. Wayfinding time, error rates and staff enquiries validate impact before expansion to more lines and cities."
        }
      },
      { type: "images", rows: [["5-1.webp"], ["5-2.webp"], ["5-3.webp"]], gap: false }
    ]
  },
  {
    id: "project-06",
    cover: "6_cover.png",
    title: { zh: "百度文心APP产品运营设计", en: "Baidu 文心 App Product Operations Design" },
    type: { zh: "运营设计、AI辅助设计", en: "Operational Design, AI-assisted Design" },
    year: "2025",
    categories: ["campaign", "aigc"],
    intro: {
      zh: "AIGC辅助设计，负责ToC AI产品生图功能运营，围绕功能体验、玩法探索与社区内容供给设计用户参与机制及使用场景；累计落地18场AIGC主题活动，带动用户使用AI产品投稿4.2万人次，产出5.4万篇AIGC内容。",
      en: "AI-assisted operations design for a consumer image-generation product. I created participation mechanics and use cases around feature discovery, creative play and community supply, delivering 18 AIGC campaigns that generated 42,000 submissions and 54,000 pieces of content."
    },
    content: [
      { type: "heading", title: { zh: "活动banner", en: "Campaign Banners" } },
      { type: "strips", groups: [["6-1-1.webp", "6-1-2.webp", "6-1-3.webp"]] },
      { type: "heading", title: { zh: "活动社区贴", en: "Community Campaign Posts" } },
      { type: "strips", groups: [
        ["6-2-1.webp", "6-2-2.webp"],
        ["6-3-1.webp", "6-3-2.webp", "6-3-3.webp"],
        ["6-4-1.webp", "6-4-2.webp", "6-4-3.webp", "6-4-4.webp"],
        ["6-5-1.webp", "6-5-2.webp", "6-5-3.webp", "6-5-4.webp"]
      ] },
      { type: "heading", title: { zh: "功能宣传海报", en: "Feature Promotion Posters" } },
      { type: "strips", groups: [["6-6.webp"]] }
    ]
  },
  {
    id: "project-07",
    cover: "7_cover.png",
    title: { zh: "在葬礼上美梦成真", en: "Funeral Fantasy" },
    type: { zh: "海报设计、编剧、装置艺术、AIGC", en: "Poster Design, Screenwriting, Interactive Installation, AIGC" },
    year: "2025",
    categories: ["posters", "interactive", "scriptwriter", "aigc"],
    intro: {
      zh: "在科技高速发展的当代，人工智能可以表现为任何用户想要的样子。它似乎具备个性、情绪、态度，但这一切只是算法模拟的结果。项目旨在让人思考：当AI可以无限拟人，我们面对的，究竟是一个“存在”，还是只是对“存在”的幻觉？它看起来是任何人，但它什么都不是——只是一个空壳，一种回应，一段想象的投射，一种虚拟的存在。",
      en: "AI can appear as almost anyone a user wants. It seems to have personality, emotion and attitude, yet these are algorithmic simulations. Funeral Fantasy asks whether an infinitely human-like AI is a presence or merely the illusion of one: an empty shell, a response and a projection of imagination."
    },
    content: [
      { type: "embed", provider: "canva", src: "https://www.canva.cn/design/DAGsrZsNRFg/xZno5d7Z1ZGk5D5rznBf4Q/view?embed", ratio: 56.25, title: "Funeral Fantasy presentation" },
      { type: "paired", items: [
        { type: "embed", provider: "vimeo", src: "https://player.vimeo.com/video/1222439949?autoplay=1&loop=1&autopause=0&muted=1&background=1&playsinline=1&controls=0&title=0&byline=0&portrait=0&badge=0&dnt=1", ratio: 84.86, autoplay: true, title: "Funeral Fantasy video" },
        { type: "image", file: "7-1.webp" }
      ] }
    ]
  },
  {
    id: "project-08", cover: "8_cover.png",
    title: { zh: "神偷大盗", en: "Big Thief, Fabulous Stealing" },
    type: { zh: "电影品牌设计、字体设计", en: "Film Branding, Typography" }, year: "2024",
    categories: ["branding", "typography", "tf"],
    intro: { zh: "为短片《神偷大盗》进行品牌设计及平面延展。", en: "Brand identity and graphic extensions for the short film Big Thief, Fabulous Stealing." },
    content: [{ type: "images", rows: [["8-1.png", "8-2.png"], ["8-3.png", "8-4.png"]], gap: false, mobileSingle: true }]
  },
  {
    id: "project-09", cover: "9_cover.png",
    title: { zh: "嘉云 x 西游「东土大糖」", en: "嘉云 x 西游「东土大糖」" },
    type: { zh: "广告设计、海报设计、AIGC", en: "Campaign Design, Poster Design, AIGC" }, year: "2025",
    categories: ["campaign-design", "posters", "aigc"],
    intro: { zh: "为嘉云水果糖与西游记IP进行联名产品的广告设计。", en: "Campaign design for a collaboration between Jiayun fruit candy and the Journey to the West IP." },
    content: [{ type: "images", rows: [["9-1.webp", "9-2.webp", "9-3.webp", "9-4.webp"]], gap: true, mobileSingle: true }]
  },
  {
    id: "project-10", cover: "10_cover.png",
    title: { zh: "Sound of 2023", en: "Sound of 2023" },
    type: { zh: "版式设计、乐评", en: "Editorial Design, Music Review" }, year: "2023",
    categories: ["editorial"],
    intro: { zh: "2023年度音乐总结。", en: "A visual review of music released and heard throughout 2023." },
    content: [{ type: "images", rows: [["10-1.webp"]], gap: false }]
  },
  {
    id: "project-11", cover: "11_cover.png",
    title: { zh: "Pop Music Cookbook\n'Not Responsible for Your Stomach'", en: "Pop Music Cookbook\n'Not Responsible for Your Stomach'" },
    type: { zh: "版式设计、艺术书", en: "Editorial Design, art book" }, year: "2024",
    categories: ["editorial"],
    intro: {
      zh: "音乐贯穿了我过去的生活——从管乐团到行进，从音乐剧到欧美乐坛和kpop与音乐剧，自始至终我的行为、兴趣爱好都与音乐有关。过往听过的音乐早已被消化为我的一部分。食物影响我们的思考、梦想和行动，音乐是否也塑造我的人格？\n\n在食谱的制作中，我选取了一些对我有深刻意义的音乐类型，结合它们背后的历史和文化编写了食谱的制作过程与材料，并以极简的文字和矢量图形的绘制表达了我对某种风格的感受与理解。同时我也结合不同流派的特征来为它们设计了食用场景。",
      en: "Music has run through my life—from concert band and marching band to musical theatre, Western pop and K-pop. My activities and interests have always been closely connected to music, and everything I have listened to has become part of who I am. Food shapes the way we think, dream and act; does music shape my personality in the same way?\n\nFor this cookbook, I selected genres that hold deep personal meaning and drew on their histories and cultures to develop each recipe’s ingredients and method. Minimal text and vector illustrations express my feelings and understanding of each style, while the characteristics of different genres inform their imagined serving contexts."
    },
    content: [{ type: "images", rows: [["11-1.webp"], ["11-2.png"], ["11-3.png"]], gap: false }]
  },
  {
    id: "project-12", cover: "12_cover.png",
    title: { zh: "布谷不哭", en: "Baby Don't Cry" },
    type: { zh: "电影海报设计", en: "Film Poster Design" }, year: "2021",
    categories: ["posters", "tf"],
    intro: { zh: "为短片《布谷不哭》进行海报设计。", en: "Poster design for the short film Baby Don't Cry." },
    content: [{ type: "images", rows: [["12-1.webp"]], gap: false }]
  },
  {
    id: "project-13", cover: "13_cover.png",
    title: { zh: "青苔", en: "Moss" },
    type: { zh: "电影海报设计、AIGC", en: "Film Poster Design, AIGC" }, year: "2024",
    categories: ["posters", "tf", "aigc"],
    intro: { zh: "为短片《青苔》进行海报设计。", en: "Poster design for the short film Moss." },
    content: [{ type: "images", rows: [["13-1.webp"]], gap: false }]
  },
  {
    id: "project-14", cover: "14_cover.png",
    title: { zh: "瑞幸咖啡 x 山海经", en: "瑞幸咖啡 x 山海经" },
    type: { zh: "广告设计、海报设计", en: "Campaign Design, Poster Design" }, year: "2024",
    categories: ["posters", "campaign-design"],
    intro: { zh: "为瑞幸咖啡与山海经联名进行广告设计。", en: "Campaign design for a collaboration between Luckin Coffee and The Classic of Mountains and Seas." },
    content: [{ type: "images", rows: [["14-1.webp"]], gap: false }]
  },
  {
    id: "project-15", cover: "15_cover.png",
    title: { zh: "Slow Life音乐节视觉再设计", en: "Slow Life Music Festival Visual Redesign" },
    type: { zh: "海报设计", en: "Poster Design" }, year: "2024",
    categories: ["posters"],
    intro: { zh: "根据主视觉，为Slow Life音乐节的设计语言进行再设计，并制作阵容海报。", en: "A redesigned visual language and lineup poster system for the Slow Life Music Festival." },
    content: [{ type: "images", rows: [["15-1.webp"]], gap: false }]
  },
  {
    id: "project-16", cover: "16_cover.png",
    title: { zh: "Sound of 2021", en: "Sound of 2021" },
    type: { zh: "版式设计、乐评", en: "Editorial Design, Music Review" }, year: "2021",
    categories: ["editorial"],
    intro: { zh: "2021年度音乐总结", en: "A visual review of music released and heard throughout 2021." },
    content: [{ type: "images", rows: [["16-1.webp"], ["16-2.webp"], ["16-3.webp", "16-4.webp"]], gap: true }]
  },
  {
    id: "project-17", cover: "17_cover.png",
    title: { zh: "标识律动", en: "Pose2Sign" },
    type: { zh: "体感游戏、互动装置、海报设计、AIGC", en: "Motion-sensing Game, Interactive Installation, Poster Design, AIGC" }, year: "2026",
    categories: ["posters", "games", "interactive", "aigc"],
    intro: {
      zh: "《标识律动（Pose2Sign）》是一件探索身体、符号与人工智能关系的体感游戏互动装置。参与者根据随机行为词进行身体表达，系统通过姿态识别与生成式AI，将动作转化为统一风格的安全标识。作品通过不同个体对同一概念的身体演绎，探讨个体经验如何参与公共视觉语言的形成，并探索人与AI共同创造符号的可能。",
      en: "Pose2Sign is a motion-sensing game and installation exploring the relationship between bodies, symbols and AI. Participants interpret random action words physically; pose recognition and generative AI translate their movements into a consistent family of safety signs. The work asks how individual experience can shape public visual language and how people and AI might create symbols together."
    },
    content: [
      { type: "embed", provider: "vimeo", src: "https://player.vimeo.com/video/1222440964?badge=0&autopause=0&loop=1&muted=1&title=0&byline=0&portrait=0", ratio: 56.25, title: "Pose2Sign video" },
      { type: "images", rows: [["17-1.webp"]], gap: false }
    ]
  },
  {
    id: "project-18", cover: "18_cover.png",
    title: { zh: "二元宇宙", en: "Binary Universe" },
    type: { zh: "数字艺术", en: "Digital Art" }, year: "2024",
    categories: ["digital-art"],
    intro: { zh: "《二元宇宙》是一个使用Touch Designer制作的数字艺术作品。", en: "Binary Universe is a digital artwork created with TouchDesigner." },
    content: [{ type: "paired", items: [
      { type: "embed", provider: "vimeo", src: "https://player.vimeo.com/video/1222442200?title=0&byline=0&portrait=0&badge=0&autopause=0&muted=1", ratio: 133.29, title: "Binary Universe video" },
      { type: "image", file: "18-1.webp" }
    ] }]
  },
  {
    id: "project-19", cover: "19_cover.png",
    title: { zh: "The Light", en: "The Light" },
    type: { zh: "戏剧海报设计、编剧", en: "Theatre Poster Design, Screenwriting" }, year: "2022",
    categories: ["posters", "scriptwriter"],
    intro: { zh: "为原创英语戏剧The Light担任编剧，并设计海报。", en: "Screenwriting and poster design for the original English-language play The Light." },
    content: [{ type: "images", rows: [["19-1.webp", "19-2.webp"]], gap: true, mobileSingle: true }]
  },
  {
    id: "project-20", cover: "20_cover.png",
    title: { zh: "指令如下", en: "指令如下" },
    type: { zh: "原创戏剧编剧、导演", en: "Original Theatre, Screenwriting, Directing" }, year: "2024",
    categories: ["scriptwriter", "director"],
    intro: { zh: "在原创戏剧《指令如下》担任编剧、导演", en: "Screenwriter and director of the original theatre production 指令如下." },
    content: [{ type: "images", rows: [
      ["20-1.png", "20-2.webp"], ["20-3.webp"], ["20-4.webp"], ["20-5.webp"], ["20-6.webp"]
    ], gap: false, mobileSingle: true }]
  }
];
