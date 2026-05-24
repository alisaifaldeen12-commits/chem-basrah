import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════
   كيم-عراق  |  ChemEng Iraq Network
   Luxury Dark + Emerald — Production-Grade Social Platform
═══════════════════════════════════════════════════════════ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Cairo:wght@300;400;500;600;700;800;900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --bg:#080F0C;
  --bg2:#0D1812;
  --surface:#111A15;
  --surface2:#162018;
  --surface3:#1C2B20;
  --border:#1F3028;
  --border2:#2A4035;
  --em:#00E87A;
  --em2:#00C466;
  --em3:#009F52;
  --gold:#F5C842;
  --gold2:#D4A017;
  --text:#E8F5EE;
  --text2:#A8C4B0;
  --text3:#5A7A64;
  --danger:#FF4757;
  --blue:#00B4FF;
  --purple:#9B59FF;
  --r8:8px;--r12:12px;--r16:16px;--r20:20px;--r24:24px;
}
html{scroll-behavior:smooth;}
body{
  font-family:'Cairo',sans-serif;
  background:var(--bg);
  color:var(--text);
  direction:rtl;
  min-height:100vh;
  overflow-x:hidden;
}
body::before{
  content:'';position:fixed;inset:0;pointer-events:none;z-index:0;
  background:
    radial-gradient(ellipse 80% 60% at 20% 10%, rgba(0,232,122,0.06) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 80%, rgba(0,180,255,0.04) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 50% 50%, rgba(155,89,255,0.03) 0%, transparent 60%);
}

::-webkit-scrollbar{width:5px;}
::-webkit-scrollbar-track{background:var(--bg2);}
::-webkit-scrollbar-thumb{background:var(--border2);border-radius:4px;}
::-webkit-scrollbar-thumb:hover{background:var(--em3);}

@keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
@keyframes slideRight{from{opacity:0;transform:translateX(-20px);}to{opacity:1;transform:translateX(0);}}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.5;}}
@keyframes spin{to{transform:rotate(360deg);}}
@keyframes glowPulse{0%,100%{box-shadow:0 0 20px rgba(0,232,122,0.2);}50%{box-shadow:0 0 40px rgba(0,232,122,0.5);}}
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
@keyframes shimmer{0%{background-position:-200% center;}100%{background-position:200% center;}}
@keyframes scanLine{0%{transform:translateY(-100%);}100%{transform:translateY(100vh);}}

.fade-up{animation:fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both;}
.fade-in{animation:fadeIn 0.3s ease both;}
.stagger-1{animation-delay:0.05s;}.stagger-2{animation-delay:0.1s;}.stagger-3{animation-delay:0.15s;}.stagger-4{animation-delay:0.2s;}

input,textarea,select{
  font-family:'Cairo',sans-serif;
  color:var(--text);
  background:var(--surface2);
  border:1.5px solid var(--border2);
  border-radius:var(--r12);
  outline:none;
  transition:border-color 0.2s, box-shadow 0.2s;
}
input:focus,textarea:focus,select:focus{
  border-color:var(--em);
  box-shadow:0 0 0 3px rgba(0,232,122,0.12);
}
button{cursor:pointer;font-family:'Cairo',sans-serif;border:none;transition:all 0.2s;}
button:active{transform:scale(0.97);}

.btn-em{
  background:linear-gradient(135deg,var(--em),var(--em2));
  color:#020a05;font-weight:800;border-radius:var(--r12);
  box-shadow:0 4px 20px rgba(0,232,122,0.3);
}
.btn-em:hover{box-shadow:0 6px 28px rgba(0,232,122,0.5);transform:translateY(-1px);}
.btn-outline{
  background:transparent;color:var(--em);
  border:1.5px solid var(--em);border-radius:var(--r12);
}
.btn-outline:hover{background:rgba(0,232,122,0.1);}
.btn-ghost{background:transparent;color:var(--text2);border-radius:var(--r8);}
.btn-ghost:hover{background:var(--surface2);color:var(--text);}

.card{
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:var(--r20);
  overflow:hidden;
}
.card:hover{border-color:var(--border2);}

.tag-badge{
  display:inline-flex;align-items:center;gap:4px;
  padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;
}
.pro-badge{
  display:inline-flex;align-items:center;gap:3px;
  background:linear-gradient(135deg,var(--gold2),var(--gold));
  color:#1a0f00;padding:2px 8px;border-radius:20px;font-size:10px;font-weight:800;
}
.em-dot{
  width:8px;height:8px;border-radius:50%;background:var(--em);
  box-shadow:0 0 8px var(--em);animation:pulse 2s infinite;
}

.nav-link{
  display:flex;flex-direction:column;align-items:center;gap:3px;
  padding:8px 16px;border-radius:var(--r12);border:none;
  font-size:11px;font-weight:700;color:var(--text3);
  background:transparent;transition:all 0.2s;
}
.nav-link:hover{color:var(--text2);background:var(--surface2);}
.nav-link.active{color:var(--em);background:rgba(0,232,122,0.1);}
.nav-link .icon{font-size:20px;}

.post-card{
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--r20);overflow:hidden;
  transition:border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}
.post-card:hover{border-color:var(--border2);box-shadow:0 8px 40px rgba(0,0,0,0.4);}

.user-card{
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--r20);overflow:hidden;
  transition:all 0.25s cubic-bezier(0.22,1,0.36,1);
  cursor:pointer;
}
.user-card:hover{
  border-color:rgba(0,232,122,0.4);
  transform:translateY(-4px);
  box-shadow:0 16px 48px rgba(0,232,122,0.1);
}

.job-card{
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--r20);padding:24px;
  transition:all 0.25s;cursor:pointer;
}
.job-card:hover{border-color:var(--em3);box-shadow:0 8px 32px rgba(0,232,122,0.08);}

.chat-bubble-me{
  background:linear-gradient(135deg,var(--em3),var(--em2));
  color:#020a05;border-radius:18px 18px 4px 18px;
  padding:10px 14px;max-width:68%;font-size:14px;line-height:1.6;
}
.chat-bubble-other{
  background:var(--surface3);color:var(--text);
  border:1px solid var(--border2);
  border-radius:18px 18px 18px 4px;
  padding:10px 14px;max-width:68%;font-size:14px;line-height:1.6;
}

.stat-card{
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--r16);padding:20px;
  transition:border-color 0.2s;
}
.stat-card:hover{border-color:var(--border2);}

.glow-em{text-shadow:0 0 20px rgba(0,232,122,0.5);}
.gradient-text{
  background:linear-gradient(135deg,var(--em),#00BFFF);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}

.input-field{
  width:100%;padding:13px 16px;font-size:14px;
  background:var(--surface2);border:1.5px solid var(--border2);
  border-radius:var(--r12);color:var(--text);
}
.textarea-field{
  width:100%;padding:13px 16px;font-size:14px;resize:none;
  background:var(--surface2);border:1.5px solid var(--border2);
  border-radius:var(--r12);color:var(--text);line-height:1.7;
}
::placeholder{color:var(--text3);}

.divider{height:1px;background:var(--border);margin:0;}
.section-title{font-size:11px;font-weight:800;color:var(--text3);text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;}

.pill-filter{
  padding:7px 16px;border-radius:30px;font-size:12px;font-weight:700;
  border:1.5px solid var(--border2);background:transparent;color:var(--text3);
  transition:all 0.2s;
}
.pill-filter:hover{border-color:var(--em3);color:var(--em);}
.pill-filter.active{background:rgba(0,232,122,0.12);border-color:var(--em);color:var(--em);}

.notification-dot{
  position:absolute;top:-2px;right:-2px;
  width:8px;height:8px;border-radius:50%;background:var(--danger);
  border:2px solid var(--bg);
}
`;

/* ── DATA ─────────────────────────────────────────────────── */
const USERS = [
  { id:1,name:"أحمد الكاظمي",username:"ahmed_kazemi",initials:"AK",color:"#00E87A",
    title:"مهندس كيميائي أول",company:"شركة نفط الجنوب",location:"البصرة",
    type:"موظف",tags:["نفط","بتروكيمياويات"],followers:1240,following:380,posts:45,
    bio:"متخصص في عمليات التكرير والمعالجة، خبرة 8 سنوات في حقول البصرة.",
    isPro:true,verified:true,joinDate:"2022" },
  { id:2,name:"سارة المحمداوي",username:"sara_m",initials:"SM",color:"#9B59FF",
    title:"باحثة - صناعات دوائية",company:"جامعة بغداد",location:"بغداد",
    type:"خريج",tags:["صناعات دوائية","مختبرات"],followers:890,following:210,posts:67,
    bio:"دكتوراه في الهندسة الكيميائية، متخصصة في تطوير الأدوية.",
    isPro:false,verified:false,joinDate:"2023" },
  { id:3,name:"علي الربيعي",username:"ali_r",initials:"AR",color:"#00B4FF",
    title:"طالب دكتوراه",company:"جامعة التكنولوجيا",location:"بغداد",
    type:"طالب",tags:["معالجة مياه","مختبرات"],followers:340,following:560,posts:23,
    bio:"أبحث في تقنيات معالجة المياه النفطية المصاحبة.",
    isPro:false,verified:false,joinDate:"2024" },
  { id:4,name:"نور الحسيني",username:"noor_h",initials:"NH",color:"#F5C842",
    title:"مهندسة عمليات أولى",company:"مصفى بيجي",location:"صلاح الدين",
    type:"موظف",tags:["نفط","بتروكيمياويات"],followers:2100,following:430,posts:89,
    bio:"متخصصة في تحسين كفاءة وحدات التقطير والكسر الحراري.",
    isPro:true,verified:true,joinDate:"2021" },
  { id:5,name:"مصطفى الجبوري",username:"mustafa_j",initials:"MJ",color:"#FF6B47",
    title:"مدير هندسي",company:"شركة لوك أويل",location:"القرنة",
    type:"شركة",tags:["نفط"],followers:3400,following:120,posts:112,
    bio:"إدارة مشاريع الاستخراج والمعالجة في الحقول الجنوبية.",
    isPro:true,verified:true,joinDate:"2021" },
];

const POSTS = [
  { id:1,userId:1,time:"منذ ساعتين",tag:"نفط",likes:127,comments:34,shares:18,liked:false,saved:false,
    content:"🔬 شاركم إنجاز اليوم:\n\nتمكنا من رفع كفاءة فصل H₂S في وحدة معالجة الغاز بنسبة 23% باستخدام مذيب MDEA المحسّن. المعادلة الأساسية:\n\nCO₂ + 2MDEA + H₂O ⇌ 2[MDEAH]⁺ + CO₃²⁻\n\nالسر كان في ضبط درجة حرارة التشغيل عند 45°C بدلاً من 55°C الافتراضية — رفع الانتقائية بشكل ملحوظ.\n\n#هندسة_كيميائية #نفط #معالجة_غاز" },
  { id:2,userId:4,time:"منذ 5 ساعات",tag:"بتروكيمياويات",likes:203,comments:67,shares:112,liked:true,saved:false,
    content:"⚡ نصيحة يومية للمهندسين المبتدئين:\n\nعند تصميم المبادلات الحرارية لا تنسوا معامل الرسوبيات (Fouling Factor) — يغفل عنه كثيرون!\n\n1/U_overall = 1/h_hot + R_f_hot + Δx/k_wall + R_f_cold + 1/h_cold\n\nتجاهل هذا المعامل يؤدي لأخطاء تصميمية تكلف الملايين. 💰\n\n#مبادل_حراري #هندسة_كيميائية" },
  { id:3,userId:2,time:"منذ يوم",tag:"صناعات دوائية",likes:89,comments:21,shares:45,liked:false,saved:true,
    content:"📚 نشرت بحثي الجديد في Chemical Engineering Journal!\n\nعنوان البحث: تحسين عمليات التبلور في تصنيع المضادات الحيوية باستخدام التبريد التدريجي المبرمج.\n\nالنتيجة الرئيسية: رفع نقاء المنتج من 94.2% إلى 99.1% — تحسن بنسبة 5.2%!\n\nشكراً لكل من دعمني ✨" },
  { id:4,userId:3,time:"منذ يومين",tag:"معالجة مياه",likes:56,comments:29,shares:8,liked:false,saved:false,
    content:"🌊 نتائج مذهلة من المختبر!\n\nنظام متعدد الأغشية (Multi-stage Membrane System) لمعالجة المياه النفطية المصاحبة:\n• إزالة 97.3% من الهيدروكربونات المذابة\n• ضغط تشغيل: 8-12 bar\n• طاقة استيعابية: 500 m³/day\n\nهل يعمل أحد في هذا المجال؟ نريد تبادل الخبرات! 🤝" },
];

const JOBS = [
  { id:1,title:"مهندس كيميائي أول",company:"لوك أويل العراق",logo:"🛢",location:"القرنة، البصرة",
    type:"دوام كامل",salary:"$3,500–5,000",tag:"نفط",posted:"منذ يومين",urgent:true,
    applicants:23,desc:"مطلوب مهندس كيميائي خبرة 5+ سنوات في عمليات الاستخراج والمعالجة. إجادة Aspen HYSYS ضرورية." },
  { id:2,title:"مهندس معالجة مياه",company:"AECOM Middle East",logo:"💧",location:"بغداد",
    type:"دوام كامل",salary:"$2,000–3,000",tag:"معالجة مياه",posted:"منذ أسبوع",urgent:false,
    applicants:41,desc:"خبرة في تصميم وتشغيل محطات معالجة المياه. شهادة PE ميزة إضافية." },
  { id:3,title:"باحث بتروكيمياويات",company:"مجمع بتروكيمياويات البصرة",logo:"⚗",location:"البصرة",
    type:"دوام كامل",salary:"$2,500–3,500",tag:"بتروكيمياويات",posted:"منذ 3 أيام",urgent:true,
    applicants:15,desc:"متخصص في تطوير العمليات Catalyst Development وتحسين كفاءة الإنتاج." },
  { id:4,title:"مهندس ضبط جودة",company:"دار الدواء العراقية",logo:"💊",location:"بغداد",
    type:"دوام كامل",salary:"$1,800–2,400",tag:"صناعات دوائية",posted:"منذ 5 أيام",urgent:false,
    applicants:38,desc:"إجراء التحاليل الكيميائية وضمان مطابقة المنتجات لمعايير WHO/GMP." },
];

const TAG_STYLES = {
  "نفط":           { bg:"rgba(245,200,66,0.12)", color:"#F5C842", border:"rgba(245,200,66,0.3)" },
  "بتروكيمياويات": { bg:"rgba(0,180,255,0.10)", color:"#00B4FF", border:"rgba(0,180,255,0.3)" },
  "مختبرات":       { bg:"rgba(0,232,122,0.10)", color:"#00E87A", border:"rgba(0,232,122,0.3)" },
  "معالجة مياه":   { bg:"rgba(155,89,255,0.10)", color:"#9B59FF", border:"rgba(155,89,255,0.3)" },
  "صناعات دوائية": { bg:"rgba(255,71,87,0.10)", color:"#FF6B8A", border:"rgba(255,71,87,0.3)" },
};

const TYPE_STYLES = {
  "طالب":  { icon:"🎓", color:"#00B4FF" },
  "خريج":  { icon:"📜", color:"#00E87A" },
  "موظف":  { icon:"💼", color:"#F5C842" },
  "شركة":  { icon:"🏭", color:"#9B59FF" },
};

/* ── MICRO COMPONENTS ─────────────────────────────────────── */
function Avatar({ user, size=42 }) {
  return (
    <div style={{
      width:size, height:size, borderRadius:"50%",
      background:`linear-gradient(135deg, ${user.color}22, ${user.color}44)`,
      border:`2px solid ${user.isPro ? "#F5C842" : user.color}44`,
      display:"flex", alignItems:"center", justifyContent:"center",
      color:user.color, fontWeight:800, fontSize:size*0.36,
      flexShrink:0, fontFamily:"Syne,sans-serif",
      boxShadow:`0 0 ${user.isPro?16:8}px ${user.color}22`,
    }}>
      {user.initials}
    </div>
  );
}

function TagBadge({ tag }) {
  const s = TAG_STYLES[tag] || { bg:"#1C2B20", color:"#5A7A64", border:"#2A4035" };
  return (
    <span className="tag-badge" style={{ background:s.bg, color:s.color, border:`1px solid ${s.border}` }}>
      {tag}
    </span>
  );
}

function TypeBadge({ type }) {
  const s = TYPE_STYLES[type] || TYPE_STYLES["طالب"];
  return (
    <span style={{ display:"inline-flex", alignItems:"center", gap:4,
      background:`${s.color}15`, color:s.color,
      border:`1px solid ${s.color}30`, borderRadius:20,
      padding:"3px 10px", fontSize:11, fontWeight:700 }}>
      {s.icon} {type}
    </span>
  );
}

function ProBadge() {
  return <span className="pro-badge">✦ PRO</span>;
}

function Spinner() {
  return <div style={{ width:20,height:20,border:"2px solid var(--border2)",borderTop:"2px solid var(--em)",borderRadius:"50%",animation:"spin 0.8s linear infinite" }} />;
}

/* ── NAVBAR ───────────────────────────────────────────────── */
function Navbar({ page, setPage, currentUser }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll",h);
    return () => window.removeEventListener("scroll",h);
  },[]);

  const items = [
    { id:"feed",   icon:"⌂",  label:"الرئيسية" },
    { id:"explore",icon:"◎",  label:"استكشاف" },
    { id:"jobs",   icon:"◈",  label:"وظائف" },
    { id:"ai",     icon:"◬",  label:"الذكاء" },
    { id:"chat",   icon:"◻",  label:"رسائل" },
  ];

  return (
    <nav style={{
      position:"fixed",top:0,right:0,left:0,zIndex:200,
      background:scrolled ? "rgba(8,15,12,0.95)" : "transparent",
      backdropFilter:scrolled ? "blur(20px)" : "none",
      borderBottom:scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition:"all 0.3s",
      padding:"0 24px",
    }}>
      <div style={{ maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",height:64,gap:8 }}>

        {/* Logo */}
        <div onClick={()=>setPage("feed")} style={{ display:"flex",alignItems:"center",gap:10,cursor:"pointer",marginLeft:"auto" }}>
          <div style={{
            width:38,height:38,borderRadius:12,
            background:"linear-gradient(135deg,#00E87A,#00B4FF)",
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:18,boxShadow:"0 4px 16px rgba(0,232,122,0.4)",
          }}>⚗️</div>
          <div>
            <div style={{ fontFamily:"Syne",fontWeight:800,fontSize:17,color:"var(--text)",letterSpacing:-0.5 }}>
              كيم<span style={{ color:"var(--em)" }}>عراق</span>
            </div>
            <div style={{ fontSize:8,color:"var(--text3)",letterSpacing:3,textTransform:"uppercase",marginTop:-2 }}>ChemEng Network</div>
          </div>
        </div>

        {/* Nav */}
        <div style={{ display:"flex",gap:2,marginRight:"auto",marginLeft:"auto" }}>
          {items.map(it=>(
            <button key={it.id} className={`nav-link${page===it.id?" active":""}`} onClick={()=>setPage(it.id)}>
              <span className="icon">{it.icon}</span>
              <span>{it.label}</span>
            </button>
          ))}
        </div>

        {/* Right */}
        <div style={{ display:"flex",alignItems:"center",gap:8 }}>
          <button onClick={()=>setPage("notifications")} className="btn-ghost" style={{ width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,position:"relative",border:"1px solid var(--border)",borderRadius:10 }}>
            🔔
            <span className="notification-dot" />
          </button>
          <div onClick={()=>setPage("profile")} style={{ cursor:"pointer" }}>
            <Avatar user={currentUser} size={36} />
          </div>
          <button onClick={()=>setPage("admin")} style={{ padding:"7px 14px",borderRadius:10,fontSize:12,fontWeight:700,background:"var(--surface2)",color:"var(--text3)",border:"1px solid var(--border)" }}>
            ⚙ Admin
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ── SIDEBAR LEFT ─────────────────────────────────────────── */
function LeftSidebar({ currentUser, setPage }) {
  return (
    <div style={{ width:260,flexShrink:0 }}>
      {/* Profile Card */}
      <div className="card fade-up" style={{ marginBottom:16,overflow:"hidden" }}>
        <div style={{
          height:80,background:`linear-gradient(135deg,${currentUser.color}18,var(--surface3))`,
          position:"relative"
        }}>
          <div style={{ position:"absolute",bottom:-22,right:20 }}>
            <Avatar user={currentUser} size={52} />
          </div>
        </div>
        <div style={{ padding:"28px 20px 20px" }}>
          <div style={{ display:"flex",alignItems:"center",gap:6,marginBottom:2,flexWrap:"wrap" }}>
            <span style={{ fontWeight:800,fontSize:16,color:"var(--text)" }}>{currentUser.name}</span>
            {currentUser.isPro&&<ProBadge/>}
            {currentUser.verified&&<span style={{fontSize:14}}>✅</span>}
          </div>
          <div style={{ fontSize:12,color:"var(--text3)",marginBottom:2 }}>@{currentUser.username}</div>
          <div style={{ fontSize:12,color:"var(--text2)",marginBottom:12 }}>{currentUser.title}</div>
          <div style={{ display:"flex",gap:6,flexWrap:"wrap",marginBottom:14 }}>
            <TypeBadge type={currentUser.type}/>
            {currentUser.tags.slice(0,1).map(t=><TagBadge key={t} tag={t}/>)}
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:16,textAlign:"center" }}>
            {[["منشور",currentUser.posts],[" متابع",currentUser.followers],["يتابع",currentUser.following]].map(([l,v])=>(
              <div key={l} style={{ background:"var(--surface2)",borderRadius:10,padding:"8px 4px" }}>
                <div style={{ fontWeight:900,fontSize:16,color:"var(--em)" }}>{typeof v==="number"&&v>999?(v/1000).toFixed(1)+"K":v}</div>
                <div style={{ fontSize:10,color:"var(--text3)" }}>{l}</div>
              </div>
            ))}
          </div>
          <button className="btn-em" style={{ width:"100%",padding:"10px",fontSize:13 }} onClick={()=>setPage("upgrade")}>
            ✦ ترقية للـ PRO — $1/شهر
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="card fade-up stagger-1" style={{ padding:16,marginBottom:16 }}>
        <div className="section-title">إحصائياتك اليوم</div>
        {[["👁","مشاهدات الملف","234"],["❤️","تفاعلات المنشورات","67"],["💬","رسائل جديدة","3"],["🔗","مشاركات","12"]].map(([icon,l,v])=>(
          <div key={l} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 0",borderBottom:"1px solid var(--border)" }}>
            <span style={{ fontSize:12,color:"var(--text2)" }}>{icon} {l}</span>
            <span style={{ fontWeight:800,fontSize:14,color:"var(--em)" }}>{v}</span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="card fade-up stagger-2" style={{ padding:16 }}>
        <div className="section-title">التخصصات الرائجة</div>
        {["نفط","بتروكيمياويات","معالجة مياه","مختبرات","صناعات دوائية"].map(t=>(
          <div key={t} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 0",borderBottom:"1px solid var(--border)" }}>
            <TagBadge tag={t}/>
            <span style={{ fontSize:11,color:"var(--text3)" }}>{Math.floor(Math.random()*200+50)} منشور</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── RIGHT SIDEBAR ────────────────────────────────────────── */
function RightSidebar({ users, jobs }) {
  return (
    <div style={{ width:240,flexShrink:0 }}>
      {/* Suggested */}
      <div className="card fade-up" style={{ padding:16,marginBottom:16 }}>
        <div className="section-title">مهندسون مقترحون</div>
        {users.slice(1,5).map((u,i)=>(
          <div key={u.id} className={`fade-up stagger-${i+1}`} style={{ display:"flex",alignItems:"center",gap:10,padding:"10px 0",borderBottom:"1px solid var(--border)" }}>
            <Avatar user={u} size={36}/>
            <div style={{ flex:1,minWidth:0 }}>
              <div style={{ fontWeight:700,fontSize:13,display:"flex",alignItems:"center",gap:4 }}>
                <span style={{ overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{u.name}</span>
                {u.isPro&&<span style={{ fontSize:8,background:"var(--gold2)",color:"#1a0f00",padding:"1px 4px",borderRadius:4,fontWeight:800,flexShrink:0 }}>PRO</span>}
              </div>
              <div style={{ fontSize:10,color:"var(--text3)" }}>{u.followers>999?(u.followers/1000).toFixed(1)+"K":u.followers} متابع</div>
            </div>
            <button className="btn-outline" style={{ padding:"4px 10px",fontSize:11,fontWeight:700,borderRadius:20 }}>تابع</button>
          </div>
        ))}
      </div>

      {/* Jobs */}
      <div className="card fade-up stagger-1" style={{ padding:16 }}>
        <div className="section-title">وظائف حديثة</div>
        {jobs.slice(0,3).map(j=>(
          <div key={j.id} style={{ padding:"10px 0",borderBottom:"1px solid var(--border)" }}>
            <div style={{ fontWeight:700,fontSize:12,marginBottom:3 }}>{j.title}</div>
            <div style={{ fontSize:10,color:"var(--text3)",marginBottom:5 }}>{j.company}</div>
            <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between" }}>
              <TagBadge tag={j.tag}/>
              <span style={{ fontSize:10,color:"var(--em)",fontWeight:700 }}>{j.salary}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── CREATE POST ──────────────────────────────────────────── */
function CreatePost({ currentUser }) {
  const [open, setOpen]   = useState(false);
  const [text, setText]   = useState("");
  const [tag,  setTag]    = useState("نفط");
  const [done, setDone]   = useState(false);

  const submit = () => {
    if(!text.trim()) return;
    setDone(true); setText(""); setOpen(false);
    setTimeout(()=>setDone(false),3000);
  };

  return (
    <div className="card fade-up" style={{ padding:20,marginBottom:16 }}>
      {done&&(
        <div style={{ background:"rgba(0,232,122,0.12)",border:"1px solid rgba(0,232,122,0.3)",borderRadius:10,padding:"10px 16px",marginBottom:12,color:"var(--em)",fontWeight:700,fontSize:13,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",gap:8 }}>
          ✓ نُشر منشورك بنجاح!
        </div>
      )}
      <div style={{ display:"flex",gap:12,alignItems:"flex-start" }}>
        <Avatar user={currentUser} size={44}/>
        <div style={{ flex:1 }}>
          {!open?(
            <div onClick={()=>setOpen(true)} style={{
              padding:"12px 16px",borderRadius:12,cursor:"text",
              border:"1.5px solid var(--border2)",background:"var(--surface2)",
              color:"var(--text3)",fontSize:14,
            }}>
              شارك خبراتك، أسأل سؤالاً، أو انشر فكرة... ⚗️
            </div>
          ):(
            <>
              <textarea className="textarea-field" value={text} onChange={e=>setText(e.target.value)}
                placeholder="شارك خبراتك، أسأل سؤالاً، أو انشر فكرة..." rows={4} autoFocus/>
              <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:10,flexWrap:"wrap",gap:8 }}>
                <div style={{ display:"flex",gap:6,alignItems:"center" }}>
                  {["📷","📎","📊","🔗"].map((ic,i)=>(
                    <button key={i} style={{ width:34,height:34,borderRadius:8,background:"var(--surface2)",border:"1px solid var(--border2)",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center" }}>{ic}</button>
                  ))}
                  <select value={tag} onChange={e=>setTag(e.target.value)} style={{ padding:"6px 10px",fontSize:12,borderRadius:8,fontWeight:700 }}>
                    {["نفط","بتروكيمياويات","مختبرات","معالجة مياه","صناعات دوائية"].map(t=><option key={t}>{t}</option>)}
                  </select>
                </div>
                <div style={{ display:"flex",gap:8 }}>
                  <button className="btn-ghost" onClick={()=>{setOpen(false);setText("");}} style={{ padding:"8px 14px",fontSize:13,fontWeight:700,border:"1px solid var(--border2)" }}>إلغاء</button>
                  <button className="btn-em" onClick={submit} style={{ padding:"8px 20px",fontSize:13 }} disabled={!text.trim()}>نشر ⚗</button>
                </div>
              </div>
            </>
          )}
          {!open&&(
            <div style={{ display:"flex",gap:8,marginTop:10 }}>
              {[["📷","صورة"],["📎","ملف"],["📊","إحصاء"]].map(([ic,l])=>(
                <button key={l} onClick={()=>setOpen(true)} style={{ display:"flex",alignItems:"center",gap:5,padding:"6px 12px",borderRadius:8,background:"var(--surface2)",border:"1px solid var(--border2)",color:"var(--text3)",fontSize:12,fontWeight:600 }}>{ic} {l}</button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── POST CARD ────────────────────────────────────────────── */
function PostCard({ post, users }) {
  const user = users.find(u=>u.id===post.userId);
  const [liked,    setLiked]    = useState(post.liked);
  const [saved,    setSaved]    = useState(post.saved);
  const [likes,    setLikes]    = useState(post.likes);
  const [showCmt,  setShowCmt]  = useState(false);
  const [cmtText,  setCmtText]  = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => { setLiked(!liked); setLikes(liked?likes-1:likes+1); };

  return (
    <div className="post-card fade-up" style={{ marginBottom:16 }}>
      {/* Header */}
      <div style={{ display:"flex",alignItems:"center",gap:12,padding:"18px 20px 14px" }}>
        <Avatar user={user} size={48}/>
        <div style={{ flex:1 }}>
          <div style={{ display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",marginBottom:2 }}>
            <span style={{ fontWeight:800,fontSize:15,color:"var(--text)" }}>{user.name}</span>
            {user.isPro&&<ProBadge/>}
            {user.verified&&<span>✅</span>}
          </div>
          <div style={{ display:"flex",alignItems:"center",gap:8 }}>
            <span style={{ fontSize:12,color:"var(--text3)" }}>{user.title}</span>
            <span style={{ color:"var(--border2)" }}>·</span>
            <span style={{ fontSize:11,color:"var(--text3)" }}>{post.time}</span>
          </div>
        </div>
        <TagBadge tag={post.tag}/>
        <button style={{ width:32,height:32,borderRadius:8,background:"var(--surface2)",border:"1px solid var(--border)",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center" }}>⋯</button>
      </div>

      {/* Content */}
      <div style={{ padding:"0 20px 18px",fontSize:14,color:"var(--text2)",lineHeight:1.85,whiteSpace:"pre-line",fontFamily:"Cairo" }}>
        {post.content}
      </div>

      {/* Stats Bar */}
      <div style={{ padding:"0 20px 10px",display:"flex",gap:16 }}>
        {[
          { label:`${likes} إعجاب`, color:"var(--danger)" },
          { label:`${post.comments} تعليق`, color:"var(--blue)" },
          { label:`${post.shares} مشاركة`, color:"var(--em)" },
        ].map(s=>(
          <span key={s.label} style={{ fontSize:11,color:"var(--text3)" }}>
            <span style={{ color:s.color,fontWeight:700 }}>{s.label.split(" ")[0]}</span>
            {" "}{s.label.split(" ")[1]}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="divider"/>

      {/* Actions */}
      <div style={{ display:"flex",padding:"4px 12px" }}>
        {[
          { icon:liked?"❤️":"🤍", label:liked?"أعجبني":"إعجاب", action:handleLike, active:liked, activeColor:"var(--danger)" },
          { icon:"💬", label:"تعليق", action:()=>setShowCmt(!showCmt), active:showCmt, activeColor:"var(--blue)" },
          { icon:"🔗", label:"مشاركة", action:()=>{} },
          { icon:saved?"🔖":"🔖", label:saved?"محفوظ":"حفظ", action:()=>setSaved(!saved), active:saved, activeColor:"var(--em)" },
        ].map((btn,i)=>(
          <button key={i} onClick={btn.action} style={{
            flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:5,
            padding:"10px 4px",borderRadius:10,border:"none",
            background:btn.active?"var(--surface2)":"transparent",
            color:btn.active?btn.activeColor:"var(--text3)",
            fontSize:12,fontWeight:700,transition:"all 0.15s",
          }}>
            {btn.icon} {btn.label}
          </button>
        ))}
      </div>

      {/* Comment Box */}
      {showCmt&&(
        <div style={{ padding:"12px 20px",borderTop:"1px solid var(--border)",background:"var(--surface2)" }}>
          {comments.map((c,i)=>(
            <div key={i} style={{ marginBottom:8,fontSize:13,color:"var(--text2)",padding:"8px 12px",background:"var(--surface3)",borderRadius:10 }}>
              <span style={{ color:"var(--em)",fontWeight:700 }}>أنت: </span>{c}
            </div>
          ))}
          <div style={{ display:"flex",gap:8 }}>
            <input value={cmtText} onChange={e=>setCmtText(e.target.value)}
              onKeyDown={e=>{if(e.key==="Enter"&&cmtText.trim()){setComments([...comments,cmtText]);setCmtText("");}}}
              className="input-field" placeholder="اكتب تعليقاً..." style={{ fontSize:13,padding:"9px 14px" }}/>
            <button className="btn-em" onClick={()=>{if(cmtText.trim()){setComments([...comments,cmtText]);setCmtText("");}}} style={{ padding:"9px 16px",fontSize:13,borderRadius:10 }}>نشر</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGES
══════════════════════════════════════════════════════════ */

/* FEED */
function FeedPage({ posts, users, currentUser, setPage }) {
  const [filter, setFilter] = useState("الكل");
  const tags = ["الكل","نفط","بتروكيمياويات","مختبرات","معالجة مياه","صناعات دوائية"];
  const filtered = filter==="الكل" ? posts : posts.filter(p=>p.tag===filter);

  return (
    <div style={{ display:"flex",gap:20,alignItems:"flex-start" }}>
      <LeftSidebar currentUser={currentUser} setPage={setPage}/>
      <div style={{ flex:1,minWidth:0 }}>
        {/* Filters */}
        <div style={{ display:"flex",gap:8,marginBottom:16,flexWrap:"wrap" }}>
          {tags.map(t=>(
            <button key={t} className={`pill-filter${filter===t?" active":""}`} onClick={()=>setFilter(t)}>{t}</button>
          ))}
        </div>
        <CreatePost currentUser={currentUser}/>
        {filtered.map((p,i)=>(
          <div key={p.id} style={{ animationDelay:`${i*0.08}s` }}>
            <PostCard post={p} users={users}/>
          </div>
        ))}
      </div>
      <RightSidebar users={users} jobs={JOBS}/>
    </div>
  );
}

/* EXPLORE */
function ExplorePage({ users }) {
  const [q,      setQ]      = useState("");
  const [type,   setType]   = useState("الكل");
  const [tag,    setTag]    = useState("الكل");
  const filtered = users.filter(u=>{
    const ms = !q || u.name.includes(q)||u.title.includes(q)||u.company.includes(q);
    const mt = type==="الكل"||u.type===type;
    const mg = tag==="الكل"||u.tags.includes(tag);
    return ms&&mt&&mg;
  });

  return (
    <div>
      {/* Hero Search */}
      <div style={{
        background:"linear-gradient(135deg,var(--surface2),var(--surface3))",
        border:"1px solid var(--border)",borderRadius:24,padding:"32px 32px 28px",
        marginBottom:24,position:"relative",overflow:"hidden"
      }}>
        <div style={{ position:"absolute",top:-30,left:-30,fontSize:160,opacity:0.04,pointerEvents:"none" }}>⚗</div>
        <div style={{ fontFamily:"Tajawal",fontWeight:900,fontSize:28,marginBottom:4 }}>
          <span className="gradient-text">اكتشف المجتمع</span>
        </div>
        <div style={{ color:"var(--text3)",fontSize:14,marginBottom:20 }}>
          {users.length.toLocaleString()} مهندس كيميائي في الشبكة
        </div>
        <input className="input-field" value={q} onChange={e=>setQ(e.target.value)}
          placeholder="ابحث عن مهندس، تخصص، أو شركة..."
          style={{ fontSize:15,padding:"14px 20px",marginBottom:14 }}/>
        <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
          {["الكل","طالب","خريج","موظف","شركة"].map(t=>(
            <button key={t} className={`pill-filter${type===t?" active":""}`} onClick={()=>setType(t)}>{t}</button>
          ))}
          <div style={{ width:1,background:"var(--border)",margin:"0 4px" }}/>
          {["الكل","نفط","بتروكيمياويات","مختبرات","معالجة مياه"].map(t=>(
            <button key={t} className={`pill-filter${tag===t?" active":""}`} onClick={()=>setTag(t)}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:16 }}>
        {filtered.map((u,i)=>(
          <div key={u.id} className={`user-card fade-up stagger-${(i%4)+1}`}>
            {/* Cover */}
            <div style={{ height:72,background:`linear-gradient(135deg,${u.color}20,${u.color}08)`,position:"relative" }}>
              <div style={{ position:"absolute",bottom:-24,right:20 }}>
                <Avatar user={u} size={52}/>
              </div>
            </div>
            <div style={{ padding:"30px 20px 20px" }}>
              <div style={{ display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:6 }}>
                <div>
                  <div style={{ display:"flex",alignItems:"center",gap:5,flexWrap:"wrap",marginBottom:2 }}>
                    <span style={{ fontWeight:800,fontSize:15 }}>{u.name}</span>
                    {u.isPro&&<ProBadge/>}
                  </div>
                  <div style={{ fontSize:11,color:"var(--text3)" }}>@{u.username}</div>
                </div>
                {u.verified&&<span>✅</span>}
              </div>
              <div style={{ fontSize:12,color:"var(--text2)",marginBottom:3 }}>{u.title}</div>
              <div style={{ fontSize:11,color:"var(--text3)",marginBottom:10 }}>📍 {u.location} · 🏢 {u.company}</div>
              <div style={{ display:"flex",gap:6,flexWrap:"wrap",marginBottom:12 }}>
                <TypeBadge type={u.type}/>
                {u.tags.map(t=><TagBadge key={t} tag={t}/>)}
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:14,textAlign:"center" }}>
                {[["منشور",u.posts],["متابع",u.followers],["يتابع",u.following]].map(([l,v])=>(
                  <div key={l} style={{ background:"var(--surface2)",borderRadius:8,padding:"8px 4px" }}>
                    <div style={{ fontWeight:900,fontSize:15,color:"var(--em)" }}>{v>999?(v/1000).toFixed(1)+"K":v}</div>
                    <div style={{ fontSize:10,color:"var(--text3)" }}>{l}</div>
                  </div>
                ))}
              </div>
              <button className="btn-em" style={{ width:"100%",padding:"9px",fontSize:13 }}>+ تابع</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* JOBS */
function JobsPage() {
  const [filter, setFilter] = useState("الكل");
  const [apply,  setApply]  = useState(null);
  const filtered = filter==="الكل" ? JOBS : JOBS.filter(j=>j.tag===filter);

  return (
    <div>
      {/* Hero */}
      <div style={{
        background:"linear-gradient(135deg,var(--surface2),var(--bg2))",
        border:"1px solid var(--border)",borderRadius:24,
        padding:"36px 36px 32px",marginBottom:24,position:"relative",overflow:"hidden"
      }}>
        <div style={{ position:"absolute",top:-40,left:-40,fontSize:200,opacity:0.03,pointerEvents:"none" }}>💼</div>
        <div style={{ fontFamily:"Tajawal",fontWeight:900,fontSize:30,marginBottom:4 }}>
          <span className="gradient-text">فرص العمل الهندسية</span>
        </div>
        <div style={{ color:"var(--text3)",fontSize:14,marginBottom:24 }}>وظائف حصرية للمهندسين الكيميائيين في العراق والعالم العربي</div>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,maxWidth:500 }}>
          {[["47+","وظيفة متاحة","var(--em)"],["12","شركة شريكة","var(--blue)"],["230+","تم التوظيف","var(--gold)"]].map(([v,l,c])=>(
            <div key={l} style={{ background:"var(--surface3)",borderRadius:12,padding:"14px 16px",border:"1px solid var(--border2)" }}>
              <div style={{ fontWeight:900,fontSize:24,color:c,fontFamily:"Syne" }}>{v}</div>
              <div style={{ fontSize:11,color:"var(--text3)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display:"flex",gap:8,marginBottom:20,flexWrap:"wrap" }}>
        {["الكل","نفط","بتروكيمياويات","مختبرات","معالجة مياه","صناعات دوائية"].map(t=>(
          <button key={t} className={`pill-filter${filter===t?" active":""}`} onClick={()=>setFilter(t)}>{t}</button>
        ))}
      </div>

      <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
        {filtered.map((job,i)=>(
          <div key={job.id} className={`job-card fade-up stagger-${(i%4)+1}`} onClick={()=>setApply(job)}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:16 }}>
              <div style={{ display:"flex",gap:14,alignItems:"flex-start" }}>
                <div style={{ width:52,height:52,borderRadius:14,background:"var(--surface3)",border:"1px solid var(--border2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0 }}>{job.logo}</div>
                <div>
                  <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:3,flexWrap:"wrap" }}>
                    <span style={{ fontWeight:800,fontSize:17,color:"var(--text)" }}>{job.title}</span>
                    {job.urgent&&<span style={{ background:"rgba(255,71,87,0.15)",color:"var(--danger)",border:"1px solid rgba(255,71,87,0.3)",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700 }}>🔴 عاجل</span>}
                  </div>
                  <div style={{ color:"var(--text3)",fontSize:13,marginBottom:6 }}>🏢 {job.company} &nbsp;·&nbsp; 📍 {job.location}</div>
                  <div style={{ color:"var(--text2)",fontSize:13,marginBottom:10 }}>{job.desc}</div>
                  <div style={{ display:"flex",gap:6,flexWrap:"wrap" }}>
                    <TagBadge tag={job.tag}/>
                    <span style={{ background:"var(--surface2)",color:"var(--text3)",border:"1px solid var(--border2)",borderRadius:20,padding:"3px 10px",fontSize:11,fontWeight:700 }}>⏰ {job.type}</span>
                    <span style={{ background:"var(--surface2)",color:"var(--text3)",border:"1px solid var(--border2)",borderRadius:20,padding:"3px 10px",fontSize:11,fontWeight:700 }}>📅 {job.posted}</span>
                    <span style={{ background:"var(--surface2)",color:"var(--text3)",border:"1px solid var(--border2)",borderRadius:20,padding:"3px 10px",fontSize:11,fontWeight:700 }}>👤 {job.applicants} متقدم</span>
                  </div>
                </div>
              </div>
              <div style={{ textAlign:"center",flexShrink:0 }}>
                <div style={{ fontWeight:900,fontSize:18,color:"var(--em)",marginBottom:8,fontFamily:"Syne" }}>{job.salary}</div>
                <button className="btn-em" style={{ padding:"10px 22px",fontSize:13 }}>تقدّم الآن →</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Post Job CTA */}
      <div style={{ marginTop:24,background:"var(--surface)",border:"2px dashed var(--border2)",borderRadius:20,padding:"32px",textAlign:"center" }}>
        <div style={{ fontSize:36,marginBottom:10 }}>🏭</div>
        <div style={{ fontWeight:900,fontSize:18,marginBottom:6 }}>هل تمثل شركة نفط أو بتروكيمياويات؟</div>
        <div style={{ color:"var(--text3)",fontSize:13,marginBottom:20 }}>انشر وظائفك واستقطب أفضل المهندسين الكيميائيين في العراق</div>
        <button className="btn-em" style={{ padding:"12px 32px",fontSize:14 }}>نشر وظيفة — $10 →</button>
      </div>

      {/* Apply Modal */}
      {apply&&(
        <div onClick={()=>setApply(null)} style={{ position:"fixed",inset:0,background:"rgba(0,0,0,0.8)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:20 }}>
          <div onClick={e=>e.stopPropagation()} className="card fade-in" style={{ width:"100%",maxWidth:520,maxHeight:"90vh",overflowY:"auto" }}>
            <div style={{ padding:"24px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
              <div style={{ fontWeight:800,fontSize:18 }}>{apply.title}</div>
              <button className="btn-ghost" onClick={()=>setApply(null)} style={{ fontSize:20,width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center" }}>✕</button>
            </div>
            <div style={{ padding:"16px 24px 24px" }}>
              <div style={{ color:"var(--text3)",fontSize:13,marginBottom:16 }}>{apply.company} · {apply.location}</div>
              <div style={{ marginBottom:14 }}>
                <label style={{ fontSize:12,color:"var(--text3)",display:"block",marginBottom:6 }}>الاسم الكامل</label>
                <input className="input-field" defaultValue="أحمد الكاظمي" style={{ fontSize:13,padding:"10px 14px" }}/>
              </div>
              <div style={{ marginBottom:14 }}>
                <label style={{ fontSize:12,color:"var(--text3)",display:"block",marginBottom:6 }}>البريد الإلكتروني</label>
                <input className="input-field" defaultValue="ahmed@chemeng.iq" style={{ fontSize:13,padding:"10px 14px" }}/>
              </div>
              <div style={{ marginBottom:14 }}>
                <label style={{ fontSize:12,color:"var(--text3)",display:"block",marginBottom:6 }}>رسالة التقديم</label>
                <textarea className="textarea-field" rows={4} placeholder="أخبرنا لماذا أنت المرشح المثالي..."/>
              </div>
              <button className="btn-em" style={{ width:"100%",padding:"12px",fontSize:14 }}>إرسال الطلب ✓</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* AI */
function AIPage() {
  const [msgs,    setMsgs]   = useState([{ role:"ai", text:"مرحباً! أنا **ChemAI** — مساعدك الذكي المتخصص في الهندسة الكيميائية.\n\nيمكنني مساعدتك في:\n• شرح العمليات الصناعية والمعادلات\n• الحسابات الهندسية والتصميم\n• أحدث تقنيات المعالجة والفصل\n• مراجعة ومناقشة الأبحاث\n\nاسألني أي شيء! ⚗️" }]);
  const [input,   setInput]  = useState("");
  const [loading, setLoading]= useState(false);
  const endRef = useRef(null);

  useEffect(()=>{ endRef.current?.scrollIntoView({ behavior:"smooth" }); },[msgs]);

  const send = async () => {
    if(!input.trim()||loading) return;
    const q = input.trim();
    setInput("");
    setMsgs(m=>[...m,{ role:"user",text:q }]);
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:1000,
          system:`أنت ChemAI، مساعد ذكي احترافي متخصص في الهندسة الكيميائية.
تعمل على منصة "كيم-عراق" الاجتماعية المخصصة للمهندسين الكيميائيين في العراق والعالم العربي.
أجب باللغة العربية دائماً. كن دقيقاً ومهنياً وودوداً.
تخصصاتك: عمليات النفط والغاز، البتروكيمياويات، معالجة المياه، الصناعات الدوائية، التقطير، المبادلات الحرارية، الديناميكا الحرارية، انتقال المادة والحرارة.
عند الإجابة على أسئلة تقنية: أذكر المعادلات، الوحدات، والتطبيقات العملية.`,
          messages:[{ role:"user",content:q }]
        })
      });
      const data = await res.json();
      const answer = data.content?.[0]?.text || "عذراً، حدث خطأ. حاول مرة أخرى.";
      setMsgs(m=>[...m,{ role:"ai",text:answer }]);
    } catch {
      setMsgs(m=>[...m,{ role:"ai",text:"❌ تعذّر الاتصال. تحقق من اتصالك وحاول مجدداً." }]);
    }
    setLoading(false);
  };

  const suggestions = [
    "اشرح عملية التقطير التجزيئي",
    "كيف أحسب معامل انتقال الحرارة U؟",
    "ما هي أفضل طرق فصل H₂S؟",
    "اشرح قانون رؤول في محاليل الغاز",
    "ما هي معادلة إيرغون لانخفاض الضغط؟",
  ];

  return (
    <div style={{ display:"flex",flexDirection:"column",height:"calc(100vh - 110px)",gap:16 }}>
      {/* Header */}
      <div style={{
        background:"linear-gradient(135deg,var(--surface2),var(--surface3))",
        border:"1px solid var(--border)",borderRadius:20,
        padding:"20px 24px",display:"flex",alignItems:"center",gap:16,flexShrink:0
      }}>
        <div style={{ width:52,height:52,borderRadius:16,background:"linear-gradient(135deg,var(--em),var(--blue))",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,boxShadow:"0 4px 20px rgba(0,232,122,0.3)" }}>🤖</div>
        <div>
          <div style={{ fontWeight:900,fontSize:18,fontFamily:"Tajawal" }}>ChemAI — المساعد الذكي</div>
          <div style={{ color:"var(--text3)",fontSize:12 }}>مدعوم بـ Claude AI · متخصص في الهندسة الكيميائية</div>
        </div>
        <div style={{ marginRight:"auto",display:"flex",alignItems:"center",gap:6 }}>
          <div className="em-dot"/>
          <span style={{ fontSize:12,color:"var(--em)",fontWeight:700 }}>متاح الآن</span>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex:1,overflowY:"auto",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:20,padding:20,display:"flex",flexDirection:"column",gap:16 }}>
        {msgs.map((m,i)=>(
          <div key={i} className="fade-in" style={{ display:"flex",justifyContent:m.role==="user"?"flex-start":"flex-end",gap:10 }}>
            {m.role==="user"&&<div style={{ width:32,height:32,borderRadius:10,background:"var(--surface2)",border:"1px solid var(--border2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0 }}>👤</div>}
            <div style={{
              maxWidth:"75%",
              ...(m.role==="user"
                ? { background:"var(--surface2)",border:"1px solid var(--border2)",borderRadius:"18px 18px 18px 4px",padding:"12px 16px",color:"var(--text2)" }
                : { background:"linear-gradient(135deg,var(--surface3),var(--surface2))",border:"1px solid var(--border2)",borderRadius:"18px 18px 4px 18px",padding:"14px 18px",color:"var(--text)" }
              ),
              fontSize:14,lineHeight:1.8,whiteSpace:"pre-line",
            }}>
              {m.role==="ai"&&<div style={{ fontSize:11,color:"var(--em)",fontWeight:800,marginBottom:6 }}>⚗ ChemAI</div>}
              {m.text}
            </div>
            {m.role==="ai"&&<div style={{ width:32,height:32,borderRadius:10,background:"linear-gradient(135deg,var(--em)22,var(--blue)22)",border:"1px solid var(--em)33",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0 }}>🤖</div>}
          </div>
        ))}
        {loading&&(
          <div style={{ display:"flex",justifyContent:"flex-end",gap:10 }}>
            <div style={{ background:"var(--surface3)",border:"1px solid var(--border2)",borderRadius:"18px 18px 4px 18px",padding:"14px 18px",display:"flex",alignItems:"center",gap:8,color:"var(--text3)",fontSize:13 }}>
              <Spinner/> يفكر...
            </div>
            <div style={{ width:32,height:32,borderRadius:10,background:"linear-gradient(135deg,var(--em)22,var(--blue)22)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16 }}>🤖</div>
          </div>
        )}
        <div ref={endRef}/>
      </div>

      {/* Suggestions */}
      <div style={{ display:"flex",gap:8,flexWrap:"wrap",flexShrink:0 }}>
        {suggestions.map(s=>(
          <button key={s} onClick={()=>setInput(s)} style={{ padding:"7px 14px",borderRadius:20,border:"1px solid var(--border2)",background:"var(--surface)",color:"var(--text2)",fontSize:12,fontWeight:600 }}>
            {s}
          </button>
        ))}
      </div>

      {/* Input */}
      <div style={{ display:"flex",gap:10,flexShrink:0 }}>
        <input value={input} onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&send()}
          className="input-field" placeholder="اسأل أي سؤال في الهندسة الكيميائية... (Enter للإرسال)"
          style={{ flex:1,fontSize:14,padding:"14px 18px" }}/>
        <button className="btn-em" onClick={send} disabled={loading||!input.trim()} style={{ padding:"14px 22px",fontSize:16,borderRadius:12,opacity:loading||!input.trim()?0.5:1 }}>
          ➤
        </button>
      </div>
    </div>
  );
}

/* CHAT */
function ChatPage({ users, currentUser }) {
  const [active, setActive] = useState(users[1]);
  const [history, setHistory] = useState({
    2:[{ from:2, text:"مرحباً أحمد! شاهدت بحثك عن MDEA — رائع جداً!", time:"10:30" }],
    3:[{ from:3, text:"أهلاً! هل لديك خبرة في محاكاة Aspen HYSYS؟", time:"أمس" }],
    4:[{ from:4, text:"أهلاً أحمد، شكراً على تعليقك في منشوري!", time:"الإثنين" }],
  });
  const [input, setInput] = useState("");
  const endRef = useRef(null);
  useEffect(()=>endRef.current?.scrollIntoView({behavior:"smooth"}),[history,active]);

  const send = () => {
    if(!input.trim()) return;
    setHistory(h=>({...h,[active.id]:[...(h[active.id]||[]),{ from:"me",text:input,time:"الآن" }]}));
    setInput("");
  };

  const msgs = history[active.id]||[];

  return (
    <div style={{ display:"flex",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:20,overflow:"hidden",height:"calc(100vh - 110px)" }}>
      {/* Sidebar */}
      <div style={{ width:290,borderLeft:"1px solid var(--border)",display:"flex",flexDirection:"column",background:"var(--bg2)" }}>
        <div style={{ padding:"16px 16px 12px",borderBottom:"1px solid var(--border)" }}>
          <div style={{ fontWeight:900,fontSize:16,marginBottom:10 }}>💬 المحادثات</div>
          <input className="input-field" placeholder="بحث في المحادثات..." style={{ fontSize:13,padding:"9px 14px" }}/>
        </div>
        <div style={{ flex:1,overflowY:"auto" }}>
          {users.filter(u=>u.id!==currentUser.id).map(u=>{
            const lastMsg = (history[u.id]||[]).slice(-1)[0];
            const isActive = active.id===u.id;
            return (
              <div key={u.id} onClick={()=>setActive(u)} style={{
                display:"flex",alignItems:"center",gap:10,padding:"12px 16px",
                cursor:"pointer",transition:"background 0.15s",
                background:isActive?"var(--surface3)":"transparent",
                borderBottom:"1px solid var(--border)",
              }}>
                <div style={{ position:"relative" }}>
                  <Avatar user={u} size={42}/>
                  <div className="em-dot" style={{ position:"absolute",bottom:1,right:1,width:9,height:9,border:"2px solid var(--bg2)" }}/>
                </div>
                <div style={{ flex:1,minWidth:0 }}>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2 }}>
                    <span style={{ fontWeight:700,fontSize:13 }}>{u.name}</span>
                    <span style={{ fontSize:10,color:"var(--text3)" }}>{lastMsg?.time||""}</span>
                  </div>
                  <div style={{ fontSize:11,color:"var(--text3)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>
                    {lastMsg?.text||"ابدأ المحادثة..."}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Chat */}
      <div style={{ flex:1,display:"flex",flexDirection:"column" }}>
        {/* Header */}
        <div style={{ padding:"14px 20px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:12,background:"var(--surface2)" }}>
          <Avatar user={active} size={42}/>
          <div style={{ flex:1 }}>
            <div style={{ fontWeight:800,fontSize:15 }}>{active.name}</div>
            <div style={{ display:"flex",alignItems:"center",gap:6 }}>
              <div className="em-dot" style={{ width:7,height:7 }}/>
              <span style={{ fontSize:11,color:"var(--em)" }}>متصل الآن</span>
            </div>
          </div>
          {["📞","📹","⋯"].map((ic,i)=>(
            <button key={i} style={{ width:36,height:36,borderRadius:10,background:"var(--surface3)",border:"1px solid var(--border2)",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center" }}>{ic}</button>
          ))}
        </div>

        {/* Messages */}
        <div style={{ flex:1,overflowY:"auto",padding:"20px",display:"flex",flexDirection:"column",gap:12,background:"var(--bg2)" }}>
          {msgs.map((m,i)=>(
            <div key={i} className="fade-in" style={{ display:"flex",justifyContent:m.from==="me"?"flex-start":"flex-end" }}>
              {m.from!=="me"&&<Avatar user={active} size={30} />}
              <div style={{ margin:"0 8px" }}>
                <div className={m.from==="me"?"chat-bubble-me":"chat-bubble-other"}>{m.text}</div>
                <div style={{ fontSize:10,color:"var(--text3)",marginTop:3,textAlign:m.from==="me"?"right":"left" }}>{m.time}</div>
              </div>
            </div>
          ))}
          <div ref={endRef}/>
        </div>

        {/* Input */}
        <div style={{ padding:"12px 16px",borderTop:"1px solid var(--border)",display:"flex",gap:8,background:"var(--surface2)" }}>
          {["😊","📎","📷"].map((ic,i)=>(
            <button key={i} style={{ width:36,height:36,borderRadius:10,background:"var(--surface3)",border:"1px solid var(--border)",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>{ic}</button>
          ))}
          <input value={input} onChange={e=>setInput(e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&send()}
            className="input-field" placeholder="اكتب رسالة..." style={{ flex:1,fontSize:14,padding:"10px 14px" }}/>
          <button className="btn-em" onClick={send} style={{ padding:"10px 18px",fontSize:18,borderRadius:10,flexShrink:0 }}>➤</button>
        </div>
      </div>
    </div>
  );
}

/* PROFILE */
function ProfilePage({ user }) {
  const [tab, setTab] = useState("منشورات");
  const userPosts = POSTS.filter(p=>p.userId===user.id);
  const [following, setFollowing] = useState(false);

  return (
    <div>
      {/* Cover + Info */}
      <div className="card fade-up" style={{ marginBottom:20,overflow:"hidden" }}>
        <div style={{ height:140,background:`linear-gradient(135deg,${user.color}18,${user.color}08,var(--surface3))`,position:"relative" }}>
          <div style={{ position:"absolute",inset:0,backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${user.color.slice(1)}' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}/>
          <div style={{ position:"absolute",bottom:-36,right:30 }}>
            <Avatar user={user} size={80}/>
          </div>
          <div style={{ position:"absolute",bottom:12,left:20,display:"flex",gap:8 }}>
            <button style={{ padding:"7px 16px",borderRadius:10,background:"rgba(0,0,0,0.5)",color:"#fff",border:"1px solid rgba(255,255,255,0.15)",fontSize:12,fontWeight:700,backdropFilter:"blur(10px)" }}>
              ✏ تعديل الغلاف
            </button>
          </div>
        </div>
        <div style={{ padding:"44px 28px 24px",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:16 }}>
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:3,flexWrap:"wrap" }}>
              <span style={{ fontWeight:900,fontSize:24,color:"var(--text)" }}>{user.name}</span>
              {user.isPro&&<ProBadge/>}
              {user.verified&&<span style={{fontSize:18}}>✅</span>}
            </div>
            <div style={{ color:"var(--text3)",fontSize:13,marginBottom:4 }}>@{user.username}</div>
            <div style={{ color:"var(--text2)",fontSize:14,marginBottom:6 }}>{user.title}</div>
            <div style={{ color:"var(--text3)",fontSize:13,marginBottom:10 }}>📍 {user.location} · 🏢 {user.company}</div>
            <div style={{ display:"flex",gap:8,flexWrap:"wrap",marginBottom:12 }}>
              <TypeBadge type={user.type}/>
              {user.tags.map(t=><TagBadge key={t} tag={t}/>)}
            </div>
            <div style={{ color:"var(--text2)",fontSize:14,maxWidth:520,lineHeight:1.7 }}>{user.bio}</div>
          </div>
          <div style={{ display:"flex",gap:8,flexShrink:0 }}>
            <button className="btn-em" style={{ padding:"10px 22px",fontSize:13 }}>✏ تعديل الملف</button>
            <button className="btn-outline" style={{ padding:"10px 16px",fontSize:13 }}>📤 مشاركة</button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",borderTop:"1px solid var(--border)" }}>
          {[["منشور",user.posts,"📝"],["متابع",user.followers,"👥"],["يتابع",user.following,"📌"],["زيارة","234","👁"]].map(([l,v,ic])=>(
            <div key={l} style={{ textAlign:"center",padding:"18px",borderLeft:"1px solid var(--border)" }}>
              <div style={{ fontWeight:900,fontSize:22,color:"var(--em)",fontFamily:"Syne" }}>{typeof v==="number"&&v>999?(v/1000).toFixed(1)+"K":v}</div>
              <div style={{ fontSize:12,color:"var(--text3)" }}>{ic} {l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex",gap:4,marginBottom:20,background:"var(--surface)",borderRadius:14,padding:6,border:"1px solid var(--border)" }}>
        {["منشورات","معلومات","خبرات","CV","الشهادات"].map(t=>(
          <button key={t} onClick={()=>setTab(t)} style={{
            flex:1,padding:"9px",borderRadius:10,border:"none",
            background:tab===t?"var(--em)":"transparent",
            color:tab===t?"#020a05":"var(--text3)",
            fontWeight:700,fontSize:13,transition:"all 0.2s",
          }}>{t}</button>
        ))}
      </div>

      {tab==="منشورات"&&(
        <div>{userPosts.length>0?userPosts.map(p=><PostCard key={p.id} post={p} users={USERS}/>):<div style={{textAlign:"center",padding:60,color:"var(--text3)"}}>لا توجد منشورات بعد</div>}</div>
      )}
      {tab==="معلومات"&&(
        <div className="card" style={{ padding:28 }}>
          <div style={{ fontWeight:800,fontSize:18,marginBottom:20 }}>نبذة شخصية</div>
          <p style={{ color:"var(--text2)",lineHeight:1.9,fontSize:14,marginBottom:24 }}>{user.bio}</p>
          <div className="divider" style={{ marginBottom:24 }}/>
          {[["📧","البريد الإلكتروني","ahmed@chemeng.iq"],["📍","الموقع",user.location],["🏢","الشركة/الجهة",user.company],["📅","تاريخ الانضمام","عام "+user.joinDate],["🌐","الموقع","chemeng-ahmed.iq"]].map(([icon,l,v])=>(
            <div key={l} style={{ display:"flex",alignItems:"center",gap:14,padding:"12px 0",borderBottom:"1px solid var(--border)" }}>
              <span style={{ fontSize:20,width:28 }}>{icon}</span>
              <span style={{ color:"var(--text3)",fontSize:13,width:130 }}>{l}</span>
              <span style={{ color:"var(--text)",fontSize:14,fontWeight:600 }}>{v}</span>
            </div>
          ))}
        </div>
      )}
      {tab==="خبرات"&&(
        <div className="card" style={{ padding:28 }}>
          <div style={{ fontWeight:800,fontSize:18,marginBottom:20 }}>المسيرة المهنية</div>
          {[
            { year:"2019 — الآن",role:"مهندس كيميائي أول",company:"شركة نفط الجنوب",tag:"نفط",desc:"إدارة وتشغيل وحدات معالجة الغاز الطبيعي والتكرير. تحسين كفاءة الوحدات بنسبة 18%." },
            { year:"2016 — 2019",role:"مهندس عمليات",company:"مصفى الدورة",tag:"بتروكيمياويات",desc:"الإشراف على وحدات التقطير والكسر الحراري. تدريب 12 مهندس جديد." },
          ].map((xp,i)=>(
            <div key={i} style={{ display:"flex",gap:16,padding:"18px 0",borderBottom:"1px solid var(--border)" }}>
              <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:4 }}>
                <div style={{ width:14,height:14,borderRadius:"50%",background:"var(--em)",boxShadow:"0 0 10px rgba(0,232,122,0.5)",flexShrink:0,marginTop:4 }}/>
                {i<1&&<div style={{ flex:1,width:2,background:"var(--border2)",borderRadius:1 }}/>}
              </div>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:3,flexWrap:"wrap" }}>
                  <span style={{ fontWeight:800,fontSize:16 }}>{xp.role}</span>
                  <TagBadge tag={xp.tag}/>
                </div>
                <div style={{ color:"var(--text3)",fontSize:13,marginBottom:6 }}>{xp.company} · {xp.year}</div>
                <div style={{ color:"var(--text2)",fontSize:13,lineHeight:1.7 }}>{xp.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {tab==="CV"&&(
        <div className="card" style={{ padding:48,textAlign:"center" }}>
          <div style={{ fontSize:64,marginBottom:16 }}>📄</div>
          <div style={{ fontWeight:900,fontSize:20,marginBottom:8 }}>رفع السيرة الذاتية</div>
          <div style={{ color:"var(--text3)",fontSize:14,marginBottom:24,maxWidth:400,margin:"0 auto 24px" }}>
            ارفع CV احترافي ليظهر لشركات النفط والبتروكيمياويات — اشتراك PRO مطلوب للإبراز
          </div>
          <button className="btn-em" style={{ padding:"13px 36px",fontSize:15 }}>رفع CV الآن 📎</button>
        </div>
      )}
      {tab==="الشهادات"&&(
        <div className="card" style={{ padding:28 }}>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:14 }}>
            {[
              { title:"بكالوريوس هندسة كيميائية",org:"جامعة التكنولوجيا",year:"2015",icon:"🎓" },
              { title:"شهادة Aspen HYSYS",org:"AspenTech",year:"2018",icon:"⚙" },
              { title:"شهادة Hazop Study",org:"NEBOSH",year:"2020",icon:"🔒" },
            ].map((c,i)=>(
              <div key={i} style={{ background:"var(--surface2)",borderRadius:14,padding:20,border:"1px solid var(--border2)",display:"flex",gap:14 }}>
                <div style={{ width:44,height:44,borderRadius:12,background:"var(--surface3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22 }}>{c.icon}</div>
                <div>
                  <div style={{ fontWeight:700,fontSize:14,marginBottom:2 }}>{c.title}</div>
                  <div style={{ fontSize:12,color:"var(--text3)" }}>{c.org}</div>
                  <div style={{ fontSize:11,color:"var(--em)",fontWeight:700,marginTop:4 }}>{c.year}</div>
                </div>
              </div>
            ))}
            <div style={{ background:"var(--surface2)",borderRadius:14,padding:20,border:"2px dashed var(--border2)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer",minHeight:100 }}>
              <span style={{ fontSize:28,color:"var(--text3)" }}>+</span>
              <span style={{ fontSize:13,color:"var(--text3)",fontWeight:700 }}>إضافة شهادة</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ADMIN */
function AdminPage() {
  const stats = [
    { label:"إجمالي المستخدمين",value:"1,247",change:"+12%",icon:"👥",color:"var(--em)" },
    { label:"مشتركو PRO",value:"89",change:"+5%",icon:"✦",color:"var(--gold)" },
    { label:"منشورات اليوم",value:"34",change:"+8%",icon:"📝",color:"var(--blue)" },
    { label:"إيرادات الشهر",value:"$892",change:"+23%",icon:"💰",color:"var(--purple)" },
    { label:"وظائف نشطة",value:"47",change:"+3%",icon:"💼",color:"var(--danger)" },
    { label:"معدل التفاعل",value:"68%",change:"+4%",icon:"📊",color:"var(--em2)" },
  ];

  const months = ["يناير","فبراير","مارس","أبريل","مايو"];
  const vals   = [620,780,945,1100,1247];
  const maxVal = Math.max(...vals);

  return (
    <div>
      <div style={{ fontFamily:"Tajawal",fontWeight:900,fontSize:28,marginBottom:6 }}>
        <span className="gradient-text">لوحة تحكم الإدارة</span>
      </div>
      <div style={{ color:"var(--text3)",fontSize:13,marginBottom:24 }}>إدارة المنصة والمستخدمين والمحتوى</div>

      {/* Stats Grid */}
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:14,marginBottom:24 }}>
        {stats.map((s,i)=>(
          <div key={s.label} className={`stat-card fade-up stagger-${(i%4)+1}`}>
            <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12 }}>
              <div style={{ width:44,height:44,borderRadius:12,background:`${s.color}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20 }}>{s.icon}</div>
              <span style={{ fontSize:11,fontWeight:700,background:"rgba(0,232,122,0.12)",color:"var(--em)",padding:"3px 8px",borderRadius:20 }}>{s.change}</span>
            </div>
            <div style={{ fontWeight:900,fontSize:26,color:"var(--text)",fontFamily:"Syne",marginBottom:2 }}>{s.value}</div>
            <div style={{ fontSize:12,color:"var(--text3)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display:"grid",gridTemplateColumns:"1.4fr 1fr",gap:16,marginBottom:16 }}>
        {/* Growth Chart */}
        <div className="card" style={{ padding:24 }}>
          <div style={{ fontWeight:800,fontSize:16,marginBottom:20 }}>📈 نمو المستخدمين</div>
          <div style={{ display:"flex",alignItems:"flex-end",gap:12,height:120 }}>
            {vals.map((v,i)=>(
              <div key={i} style={{ flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:6 }}>
                <span style={{ fontSize:11,color:"var(--em)",fontWeight:700 }}>{v}</span>
                <div style={{
                  width:"100%",borderRadius:"6px 6px 0 0",
                  height:`${(v/maxVal)*100}px`,
                  background:`linear-gradient(180deg,var(--em),var(--em3))`,
                  transition:"height 0.5s"
                }}/>
                <span style={{ fontSize:10,color:"var(--text3)" }}>{months[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Users Table */}
        <div className="card" style={{ padding:20 }}>
          <div style={{ fontWeight:800,fontSize:16,marginBottom:14 }}>👥 آخر المستخدمين</div>
          {USERS.map(u=>(
            <div key={u.id} style={{ display:"flex",alignItems:"center",gap:10,padding:"10px 0",borderBottom:"1px solid var(--border)" }}>
              <Avatar user={u} size={34}/>
              <div style={{ flex:1,minWidth:0 }}>
                <div style={{ fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{u.name}</div>
                <div style={{ fontSize:10,color:"var(--text3)" }}><TypeBadge type={u.type}/></div>
              </div>
              {u.isPro&&<ProBadge/>}
              <div style={{ display:"flex",gap:4 }}>
                <button style={{ padding:"3px 8px",borderRadius:6,background:"rgba(0,232,122,0.1)",color:"var(--em)",border:"1px solid rgba(0,232,122,0.2)",fontSize:10,fontWeight:700 }}>✓</button>
                <button style={{ padding:"3px 8px",borderRadius:6,background:"rgba(255,71,87,0.1)",color:"var(--danger)",border:"1px solid rgba(255,71,87,0.2)",fontSize:10,fontWeight:700 }}>✕</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Posts Moderation */}
      <div className="card" style={{ padding:24 }}>
        <div style={{ fontWeight:800,fontSize:16,marginBottom:16 }}>📝 إدارة المنشورات</div>
        {POSTS.map(p=>{
          const user = USERS.find(u=>u.id===p.userId);
          return (
            <div key={p.id} style={{ display:"flex",alignItems:"center",gap:12,padding:"12px 0",borderBottom:"1px solid var(--border)" }}>
              <Avatar user={user} size={36}/>
              <div style={{ flex:1,minWidth:0 }}>
                <div style={{ fontWeight:700,fontSize:13 }}>{user.name}</div>
                <div style={{ fontSize:12,color:"var(--text3)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{p.content.slice(0,60)}...</div>
              </div>
              <TagBadge tag={p.tag}/>
              <span style={{ fontSize:11,color:"var(--text3)" }}>❤ {p.likes}</span>
              <div style={{ display:"flex",gap:6 }}>
                <button style={{ padding:"5px 12px",borderRadius:8,background:"rgba(0,232,122,0.1)",color:"var(--em)",border:"1px solid rgba(0,232,122,0.2)",fontSize:11,fontWeight:700 }}>موافق</button>
                <button style={{ padding:"5px 12px",borderRadius:8,background:"rgba(255,71,87,0.1)",color:"var(--danger)",border:"1px solid rgba(255,71,87,0.2)",fontSize:11,fontWeight:700 }}>حذف</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* UPGRADE */
function UpgradePage({ setPage }) {
  const [selected, setSelected] = useState("monthly");
  return (
    <div style={{ maxWidth:800,margin:"0 auto" }}>
      <div style={{ textAlign:"center",marginBottom:48 }}>
        <div style={{ fontSize:48,marginBottom:16 }}>✦</div>
        <div style={{ fontFamily:"Tajawal",fontWeight:900,fontSize:36,marginBottom:8 }}>
          <span className="gradient-text">ارتقِ إلى PRO</span>
        </div>
        <div style={{ color:"var(--text3)",fontSize:16 }}>افتح كامل إمكانياتك كمهندس كيميائي محترف</div>
      </div>
      <div style={{ display:"flex",justifyContent:"center",gap:8,marginBottom:40 }}>
        {[["monthly","شهري — $1"],["yearly","سنوي — $10 وفّر 17%"]].map(([k,l])=>(
          <button key={k} onClick={()=>setSelected(k)} className={selected===k?"btn-em":"btn-outline"} style={{ padding:"10px 24px",fontSize:14 }}>{l}</button>
        ))}
      </div>
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
        {/* Free */}
        <div className="card" style={{ padding:32 }}>
          <div style={{ fontWeight:900,fontSize:22,marginBottom:4 }}>مجاني</div>
          <div style={{ fontFamily:"Syne",fontWeight:900,fontSize:36,marginBottom:20,color:"var(--text2)" }}>$0</div>
          {["ملف شخصي كامل","نشر المنشورات","التعليق والتفاعل","متابعة المستخدمين","الرسائل الداخلية","المساعد الذكي (10 رسائل/يوم)"].map(f=>(
            <div key={f} style={{ display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)",fontSize:13,color:"var(--text2)" }}>
              <span style={{ color:"var(--em)" }}>✓</span> {f}
            </div>
          ))}
          <button className="btn-outline" style={{ width:"100%",padding:"12px",marginTop:20,fontSize:14 }}>خطتك الحالية</button>
        </div>
        {/* Pro */}
        <div style={{ background:"linear-gradient(135deg,rgba(0,232,122,0.08),rgba(0,180,255,0.05))",border:"2px solid var(--em)",borderRadius:20,padding:32,position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:16,left:16,background:"var(--em)",color:"#020a05",borderRadius:20,padding:"3px 12px",fontSize:11,fontWeight:900 }}>الأكثر شيوعاً</div>
          <div style={{ fontWeight:900,fontSize:22,marginBottom:4 }}>PRO ✦</div>
          <div style={{ display:"flex",alignItems:"baseline",gap:4,marginBottom:20 }}>
            <span style={{ fontFamily:"Syne",fontWeight:900,fontSize:36,color:"var(--em)" }}>${selected==="monthly"?"1":"10"}</span>
            <span style={{ color:"var(--text3)",fontSize:14 }}>/{selected==="monthly"?"شهر":"سنة"}</span>
          </div>
          {["كل مزايا المجاني","✦ شارة PRO المميزة","ظهور أعلى في البحث","مشاهدة زوار ملفك","رفع CV غير محدود","المساعد الذكي غير محدود","أولوية في التوظيف","إعلانات بدون مقاطعة","دعم أولوية 24/7"].map(f=>(
            <div key={f} style={{ display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid rgba(0,232,122,0.1)",fontSize:13,color:f.startsWith("✦")?"var(--em)":"var(--text2)" }}>
              <span style={{ color:"var(--em)" }}>✓</span> {f}
            </div>
          ))}
          <button className="btn-em" style={{ width:"100%",padding:"13px",marginTop:20,fontSize:15,animation:"glowPulse 2s infinite" }}>
            ابدأ PRO الآن →
          </button>
        </div>
      </div>
    </div>
  );
}

/* NOTIFICATIONS */
function NotificationsPage() {
  const notifs = [
    { icon:"❤️",text:"نور الحسيني أعجبت بمنشورك عن MDEA",time:"منذ 5 دقائق",color:"var(--danger)",read:false },
    { icon:"💬",text:"علي الربيعي علّق على منشورك",time:"منذ ساعة",color:"var(--blue)",read:false },
    { icon:"👤",text:"سارة المحمداوي بدأت بمتابعتك",time:"منذ 3 ساعات",color:"var(--em)",read:false },
    { icon:"💼",text:"وظيفة جديدة تناسب ملفك: مهندس كيميائي أول — لوك أويل",time:"منذ 5 ساعات",color:"var(--gold)",read:true },
    { icon:"✦",text:"انتهى عرض PRO الخاص — وفّر 17% عند الاشتراك السنوي",time:"منذ يوم",color:"var(--purple)",read:true },
  ];
  return (
    <div className="card" style={{ padding:0,overflow:"hidden" }}>
      <div style={{ padding:"20px 24px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
        <div style={{ fontWeight:900,fontSize:18 }}>🔔 الإشعارات</div>
        <button className="btn-ghost" style={{ fontSize:12,padding:"6px 12px",border:"1px solid var(--border2)" }}>تعيين الكل كمقروء</button>
      </div>
      {notifs.map((n,i)=>(
        <div key={i} style={{
          display:"flex",alignItems:"center",gap:14,padding:"16px 24px",
          borderBottom:"1px solid var(--border)",
          background:n.read?"transparent":"rgba(0,232,122,0.03)",
          transition:"background 0.2s",cursor:"pointer"
        }}>
          <div style={{ width:42,height:42,borderRadius:12,background:`${n.color}18`,border:`1px solid ${n.color}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0 }}>{n.icon}</div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:14,fontWeight:n.read?500:700,color:n.read?"var(--text2)":"var(--text)" }}>{n.text}</div>
            <div style={{ fontSize:11,color:"var(--text3)",marginTop:3 }}>{n.time}</div>
          </div>
          {!n.read&&<div style={{ width:8,height:8,borderRadius:"50%",background:"var(--em)",flexShrink:0,boxShadow:"0 0 8px var(--em)" }}/>}
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   APP ROOT
══════════════════════════════════════════════════════════ */
export default function App() {
  const [page, setPage] = useState("feed");
  const currentUser = USERS[0];

  const renderPage = () => {
    switch(page) {
      case "feed":          return <FeedPage posts={POSTS} users={USERS} currentUser={currentUser} setPage={setPage}/>;
      case "explore":       return <ExplorePage users={USERS}/>;
      case "jobs":          return <JobsPage/>;
      case "ai":            return <AIPage/>;
      case "chat":          return <ChatPage users={USERS} currentUser={currentUser}/>;
      case "profile":       return <ProfilePage user={currentUser}/>;
      case "admin":         return <AdminPage/>;
      case "upgrade":       return <UpgradePage setPage={setPage}/>;
      case "notifications": return <NotificationsPage/>;
      default:              return <FeedPage posts={POSTS} users={USERS} currentUser={currentUser} setPage={setPage}/>;
    }
  };

  return (
    <>
      <style>{CSS}</style>
      <Navbar page={page} setPage={setPage} currentUser={currentUser}/>
      <main style={{ maxWidth:1200,margin:"0 auto",padding:"84px 20px 40px",position:"relative",zIndex:1 }}>
        {renderPage()}
      </main>

      {/* Mobile Bottom Nav */}
      <div style={{
        position:"fixed",bottom:0,right:0,left:0,zIndex:200,
        background:"rgba(8,15,12,0.95)",backdropFilter:"blur(20px)",
        borderTop:"1px solid var(--border)",
        display:"flex",justifyContent:"space-around",padding:"8px 0 max(8px,env(safe-area-inset-bottom))",
      }}>
        {[["⌂","feed","الرئيسية"],["◎","explore","استكشاف"],["◈","jobs","وظائف"],["◬","ai","الذكاء"],["◻","chat","رسائل"],["◉","profile","ملفي"]].map(([icon,id,label])=>(
          <button key={id} className={`nav-link${page===id?" active":""}`} onClick={()=>setPage(id)} style={{ padding:"6px 10px",minWidth:50 }}>
            <span style={{ fontSize:18 }}>{icon}</span>
            <span style={{ fontSize:9 }}>{label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
