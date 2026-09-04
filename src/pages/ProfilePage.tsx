import { useState, useRef, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Sparkles, BookOpen, MonitorPlay, Heart, ChevronDown, Mail, Github, MessageCircle } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const AVATAR_URL = "https://miaoda-image.bj.bcebos.com/pixabay_round1/02/pixabay_172364_2092113.jpg";

// 数字分身知识库
const KNOWLEDGE_BASE: Record<string, string> = {
  "怎么联系你": "你可以通过主页上的联系方式联系我。具体信息以联系方式区展示的内容为准。",
  "怎么联系": "你可以通过主页上的联系方式联系我。具体信息以联系方式区展示的内容为准。",
  "怎么联系他": "你可以通过主页上的联系方式联系他。具体信息以联系方式区展示的内容为准。",
  "联系方式": "你可以通过主页上的联系方式联系我。具体信息以联系方式区展示的内容为准。",
  "你现在在做什么": "我最近在开发个人网页。",
  "最近在做什么": "我最近在开发个人网页。",
  "在做什么": "我最近在开发个人网页。",
  "他现在是学生吗": "是的，他现在在香港都会大学读书。",
  "他是学生吗": "是的，他现在在香港都会大学读书。",
  "你现在是学生吗": "是的，我现在在香港都会大学读书。",
  "你是学生吗": "是的，我现在在香港都会大学读书。",
  "你擅长什么": "我长期关注可以参与的项目，不管是个体项目还是集体项目。",
  "关注什么": "我长期关注可以参与的项目，不管是个体项目还是集体项目。",
  "做过什么": "我目前只知道自己正在开发个人网页，其他经历需要通过联系方式进一步确认。",
  "你是谁": "我是石广钧的数字分身，用来在个人主页里回答访客关于我的问题。我是一名电子与计算机工程专业的大学生。",
  "你好": "你好，我是石广钧的数字分身。你可以问我关于他的近况、关注方向或联系方式。",
  "hi": "你好，我是石广钧的数字分身。你可以问我关于他的近况、关注方向或联系方式。",
  "hello": "你好，我是石广钧的数字分身。你可以问我关于他的近况、关注方向或联系方式。",
};

function getDigitalTwinResponse(input: string): string {
  const normalized = input.toLowerCase().replace(/[?？。，!！\s]/g, "").trim();

  for (const [key, response] of Object.entries(KNOWLEDGE_BASE)) {
    const normalizedKey = key.toLowerCase().replace(/[?？。，!！\s]/g, "").trim();
    if (normalized.includes(normalizedKey) || normalizedKey.includes(normalized)) {
      return response;
    }
  }

  // 模糊匹配
  if (normalized.includes("联系")) {
    return KNOWLEDGE_BASE["怎么联系你"];
  }
  if (normalized.includes("擅长") || normalized.includes("关注") || normalized.includes("项目")) {
    return KNOWLEDGE_BASE["你擅长什么"];
  }
  if (normalized.includes("做") || normalized.includes("学") || normalized.includes("忙")) {
    return KNOWLEDGE_BASE["你现在在做什么"];
  }
  if (normalized.includes("是谁") || normalized.includes("介绍") || normalized.includes("谁")) {
    return KNOWLEDGE_BASE["你是谁"];
  }

  return "这个问题我目前不知道，不能编造答案。你可以通过主页上的联系方式进一步确认。";
}

export default function ProfilePage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "你好，我是石广钧的数字分身。\n\n你可以问我：\n• 他是谁？\n• 他最近在做什么？\n• 他长期关注什么？\n• 怎么联系他？",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasInitialScrollDone = useRef(false);

  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // 模拟打字延迟
    setTimeout(() => {
      const response = getDigitalTwinResponse(text);
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (!hasInitialScrollDone.current) {
      hasInitialScrollDone.current = true;
      return;
    }

    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const suggestedQuestions = [
    "你现在在做什么，比如项目之类的？",
    "我该怎么联系你？",
    "你对将来有什么规划？",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-32 -left-24 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-8 md:pt-12 pb-4">
          <div className="grid gap-6 md:gap-8 md:grid-cols-1 items-start">
            <div className="order-1 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-4 md:mb-5 animate-fade-in-up">
                <Avatar className="w-24 h-24 md:w-28 md:h-28 ring-4 ring-primary/10 shadow-card border border-primary/10 bg-background/80">
                  <AvatarImage src={AVATAR_URL} alt="石广钧的头像" />
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl md:text-3xl font-semibold">
                    石
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="w-full space-y-3 md:space-y-4">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground animate-fade-in-up leading-none">
                  石广钧
                </h1>

                <p className="max-w-md md:max-w-none text-sm md:text-base text-muted-foreground animate-fade-in-up leading-relaxed tracking-[0.01em]">
                  专业为电子与计算机工程的大学生
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-6 pb-8">
        <div className="grid gap-6 md:grid-cols-[1.05fr_1.35fr] md:items-start">
          <div className="md:pr-2">
            <div className="grid gap-4">
              <Card className="border-border/60 shadow-soft animate-fade-in-up">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-foreground mb-1 text-balance">
                        正在做的事
                      </h3>
                      <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                        自学C语言，并开始寻找一些项目来实践所学
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 shadow-soft animate-fade-in-up">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MonitorPlay className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-foreground mb-1 text-balance">
                        兴趣爱好
                      </h3>
                      <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                        经常浏览bilibili和wikidot
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 shadow-soft animate-fade-in-up">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-foreground mb-1 text-balance">
                        一个特点
                      </h3>
                      <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                        虽然是大学生，但心境还是过于单纯，所以表现得像小学生一样
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="md:pl-2 grid gap-4">
            <div className="rounded-2xl border border-border/60 bg-card/80 shadow-soft backdrop-blur-sm p-3 md:p-4">
              <div className="mb-3 flex items-center gap-2 px-1">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">数字分身</span>
              </div>
              <div className="rounded-xl border border-border/60 bg-secondary/20 p-3 text-left">
                <p className="text-sm text-muted-foreground leading-6">
                  想了解我现在在做什么、怎么联系我，或者我未来的规划？
                </p>
              </div>
              <div className="mt-3 flex justify-end">
                <Button
                  type="button"
                  size="sm"
                  onClick={() => document.getElementById("digital-twin")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  className="h-9 px-4 rounded-full bg-primary/10 hover:bg-primary/15 text-primary"
                >
                  立即聊天
                </Button>
              </div>
            </div>

            <Card id="contact" className="border-border/60 shadow-soft">
              <CardContent className="p-5 md:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">联系方式</h2>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 rounded-xl bg-secondary/30 px-3 py-2.5">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="shrink-0 text-muted-foreground">邮箱</span>
                    <span className="ml-auto min-w-0 flex-1 break-all text-left text-foreground">
                      学生邮箱（优先联系方式）：s1376134@live.hkmu.edu.hk
                      <br />
                      谷歌邮箱：ethanshi513@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-secondary/30 px-3 py-2.5">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    <span className="shrink-0 text-muted-foreground">微信</span>
                    <span className="ml-auto min-w-0 flex-1 break-words text-right text-foreground">微信名：爱科技的发明家</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-secondary/30 px-3 py-2.5">
                    <Github className="w-4 h-4 text-primary" />
                    <span className="shrink-0 text-muted-foreground">GitHub</span>
                    <span className="ml-auto min-w-0 flex-1 break-all text-right text-foreground">账户名：Passing_Traveller_007</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="projects" className="border-border/60 shadow-soft">
              <CardContent className="p-5 md:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">作品展示</h2>
                </div>
                <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                  <h3 className="font-medium text-foreground">个人主页</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    正在搭建中的个人主页，包含个人介绍和数字分身聊天区。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="digital-twin" className="max-w-5xl mx-auto px-4 md:px-6 pb-12">
        <div className="mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">数字分身聊天区</h2>
        </div>

        <Card className="border-border/60 shadow-card overflow-hidden">
          <div className="bg-secondary/30">
            <ScrollArea className="h-80 md:h-96 px-4 py-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className="shrink-0">
                      {msg.role === "assistant" ? (
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={AVATAR_URL} alt="数字分身" />
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">石</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-white text-xs font-medium">你</span>
                        </div>
                      )}
                    </div>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-br-md" : "bg-card border border-border/60 text-foreground rounded-bl-md shadow-soft"}`}>
                      {msg.content.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < msg.content.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={AVATAR_URL} alt="数字分身" />
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">石</AvatarFallback>
                    </Avatar>
                    <div className="bg-card border border-border/60 rounded-2xl rounded-bl-md px-4 py-3 shadow-soft">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse-soft" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse-soft" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse-soft" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={scrollRef} />
              </div>
            </ScrollArea>
          </div>

          {messages.length <= 1 && (
            <div className="px-4 pt-3 pb-1 flex flex-wrap gap-2">
              {suggestedQuestions.map((q) => (
                <button key={q} onClick={() => { setInputValue(q); inputRef.current?.focus(); }} className="text-xs px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10 hover:bg-primary/10 transition-colors">
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 md:p-4 border-t border-border/60 bg-card">
            <div className="flex gap-2">
              <Input ref={inputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} placeholder="想问我点什么？" className="flex-1 bg-secondary/50 border-border/60 text-sm h-10" />
              <Button onClick={handleSend} disabled={!inputValue.trim() || isTyping} size="icon" className="shrink-0 h-10 w-10 rounded-xl">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <footer className="py-6 px-4 border-t border-border/60">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">
            石广钧的个人主页 · 用 React + Tailwind CSS 搭建
          </p>
        </div>
      </footer>
    </div>
  );
}
