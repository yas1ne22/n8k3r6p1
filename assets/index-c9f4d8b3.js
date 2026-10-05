const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/scanner-BjELVn2x.js","assets/three.module-C9ezq8zX.js","assets/sky-BRmYTtyO.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const ve="modulepreload",fe=function(e){return"/"+e},Y={},oe=function(t,a,s){let i=Promise.resolve();if(a&&a.length>0){let Z=function(v){return Promise.all(v.map(L=>Promise.resolve(L).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};var o=Z;document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),g=c?.nonce||c?.getAttribute("nonce");i=Z(a.map(v=>{if(v=fe(v),v in Y)return;Y[v]=!0;const L=v.endsWith(".css"),T=L?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${T}`))return;const w=document.createElement("link");if(w.rel=L?"stylesheet":ve,L||(w.as="script"),w.crossOrigin="",w.href=v,g&&w.setAttribute("nonce",g),document.head.appendChild(w),L)return new Promise((he,me)=>{w.addEventListener("load",he),w.addEventListener("error",()=>me(new Error(`Unable to preload CSS for ${v}`)))})}))}function r(c){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=c,window.dispatchEvent(g),!g.defaultPrevented)throw c}return i.then(c=>{for(const g of c||[])g.status==="rejected"&&r(g.reason);return t().catch(r)})},b={name:"Ismail Bettoumi",location:"Doha, Qatar",phone:"+974-70773838",whatsapp:"https://wa.me/97470773838",linkedin:"https://www.linkedin.com/in/ismail-bettoumi-868b04402/",tagline:"Digital Marketing & Growth Specialist",intro:"3+ years scaling B2B & B2C brands across SEO, paid media, AEO, and e-commerce."},B={seo:{title:"AEO & SEO Strategy",desc:"Topic-focused content and technical SEO improvements supporting organic website traffic growth.",icon:"seo"},paidmedia:{title:"Paid Advertising — Google & Meta Ads",desc:"Google and Meta Ads campaigns, with audience and creative testing based on costs and engagement.",icon:"paidmedia"},shopify:{title:"E-commerce & Shopify CRO",desc:"Shopify product pages and checkout improvements to support shopping experiences and conversions.",icon:"shopify"},email:{title:"Email Marketing & Lifecycle Automation",desc:"Automated email sequences and content adjustments based on audience response.",icon:"email"},analytics:{title:"AI & Analytics Automation",desc:"GA4 reporting and AI-assisted content and reporting workflows using Claude and the Anthropic API.",icon:"analytics"},aeo:{title:"AEO & Search Visibility",desc:"Website FAQs, structured data, and search-focused content to support search visibility.",icon:"aeo"}},F={seo:{tag:"SEO & ORGANIC GROWTH",category:"CASE // GOOGLE SEARCH · ORGANIC VISIBILITY · SEO",title:"Growing Organic Search Visibility",subtitle:"Technical SEO, Topic Clusters & Search Intent Optimization",metaLine:"Confidential Client · SEO Strategy · Organic Search · 6 Months",accent:"#3a53ed",verifiedBadge:"SEO CASE STUDY",topKpis:[{value:"+32%",label:"ORGANIC TRAFFIC",sub:"12K → 16.5K monthly sessions"},{value:"41%",label:"FEATURED SNIPPETS",sub:"Target commercial search queries"},{value:"+18%",label:"POSITION-ZERO LIFT",sub:"Search intent & Q&A capture rate"},{value:"+12%",label:"REVENUE UPLIFT",sub:"Launch window sales contribution"}],pillars:[{num:"PILLAR 01",badge:"SEARCH INTENT",title:"Search Intent & Topic Mapping",desc:"Mapped priority topics around user intent and commercial relevance."},{num:"PILLAR 02",badge:"CONTENT STRATEGY",title:"Topic-Cluster Content",desc:"Built interconnected content around priority search themes."},{num:"PILLAR 03",badge:"TECHNICAL SEO",title:"Technical SEO",desc:"Improved site structure, internal linking and technical search visibility."},{num:"PILLAR 04",badge:"PERFORMANCE",title:"Measurement & Optimization",desc:"Tracked organic traffic, rankings and search performance over time."}],ctaSubject:"SEO & Organic Growth Strategy",ctaMessage:"Hi Ismail, let's talk about SEO and organic growth."},paidmedia:{tag:"PAID MEDIA & PERFORMANCE ADS",category:"CASE // GOOGLE ADS · META ADS · E-COMMERCE",title:"Paid Media & ROAS Optimization",subtitle:"Audience Restructuring, Creative Testing & Conversion Funnels",metaLine:"Confidential Client · Paid Media Strategy · E-commerce / D2C · 90 Days",accent:"#ff6b35",verifiedBadge:"PAID MEDIA CASE STUDY",topKpis:[{value:"-22%",label:"CAC REDUCTION",sub:"Blended acquisition cost"},{value:"3.4x",label:"IMPROVED ROAS",sub:"Meta & Google Ads campaigns"},{value:"+27%",label:"SALES UPLIFT",sub:"Within 90-day scaling window"},{value:"90 Days",label:"TIMEFRAME",sub:"Audience & creative testing window"}],pillars:[{num:"PILLAR 01",badge:"AUDIENCE",title:"Audience Restructuring",desc:"Refined custom and lookalike segmentation across Meta and Google Ads."},{num:"PILLAR 02",badge:"CREATIVE TESTING",title:"Creative Testing",desc:"Deployed a systematic ad variation testing framework to combat ad fatigue."},{num:"PILLAR 03",badge:"FUNNEL OPTIMIZATION",title:"Funnel Optimization",desc:"Aligned ad messaging with landing pages to boost overall conversion rates."}],ctaSubject:"Paid Advertising & Media Buying Strategy",ctaMessage:"Hi Ismail, let's talk about Paid Advertising and ROAS optimization."},shopify:{tag:"E-COMMERCE & STOREFRONT CRO",category:"CASE // SHOPIFY RETAIL BRANDS",title:"Shopify Conversion Rate Optimization",subtitle:"Storefront UX, Funnel Audits & Checkout Optimization",accent:"#10b981",verifiedBadge:"6 Retail Brands (Verified)",topKpis:[{value:"+31%",label:"CONVERSION RATE LIFT",sub:"Average across 6 retail brands"},{value:"1.8% → 2.4%",label:"BASELINE CONVERSION",sub:"Direct storefront lift"},{value:"1.8x → 3.9x",label:"E-COMMERCE ROAS",sub:"Scaled over 12 months"},{value:"6 Brands",label:"FUNNELS OVERHAULED",sub:"UX & speed optimized"}],pillars:[{num:"PILLAR 01",badge:"FUNNEL AUDIT",title:"Shopify Architecture & UX Enhancements",desc:"Restructured navigation across 6 retail brands, lifting conversion rates from 1.8% to 2.4% (+31%)."},{num:"PILLAR 02",badge:"PRODUCT PAGES",title:"High-Converting Product Page Design",desc:"Optimized product pages, mobile UX, and trust signals to eliminate checkout hesitation."},{num:"PILLAR 03",badge:"PAGE SPEED",title:"Page Speed & Checkout Friction Reduction",desc:"Streamlined theme assets and checkout steps to cut drop-off from cart to payment."},{num:"PILLAR 04",badge:"COHORT ATTRIBUTION",title:"Attribution Audits & Spend Reallocation",desc:"Reallocated media spend to top-converting shopper cohorts, scaling ROAS to 3.9x."}],ctaSubject:"Shopify CRO & E-commerce Strategy"},email:{tag:"LIFECYCLE & RETENTION",category:"CASE // HUBSPOT · MAILCHIMP",title:"Lifecycle Email Marketing & Drip Automation",subtitle:"Automated Drips, Retention & Launch Alignment",accent:"#6366f1",verifiedBadge:"Verified Campaign Data",topKpis:[{value:"34%",label:"EMAIL OPEN RATE",sub:"+13 pts above 21% benchmark"},{value:"+29%",label:"LAUNCH REVENUE LIFT",sub:"Paid, email & SEO sync"},{value:"+42%",label:"INBOUND LEADS",sub:"85 → 120+/quarter in 2 quarters"},{value:"100%",label:"AUTOMATED DRIPS",sub:"HubSpot & Mailchimp sequences"}],pillars:[{num:"PILLAR 01",badge:"AUTOMATED DRIPS",title:"Automated Lifecycle Drip Workflows",desc:"Built automated nurture workflows in HubSpot and Mailchimp to drive sustained repeat sales."},{num:"PILLAR 02",badge:"OPEN RATE OPTIMIZATION",title:"Benchmark-Beating Open Rates (34%)",desc:"Optimized subject lines and delivery timing, achieving a 34% open rate (+13 pts above benchmark)."},{num:"PILLAR 03",badge:"OMNICHANNEL SYNC",title:"Product Launch Synchronization",desc:"Aligned email drops with paid and organic campaigns to generate a 29% revenue lift."},{num:"PILLAR 04",badge:"INBOUND PIPELINE",title:"Integrated Acquisition & Lead Nurturing",desc:"Integrated email capture with search funnels, growing qualified inbound leads by 42%."}],ctaSubject:"Email Lifecycle & Automation Strategy"},aeo:{tag:"AI CITATIONS & GENERATIVE SEARCH",category:"CASE // AEO · GOOGLE AI OVERVIEWS · PERPLEXITY",title:"Answer Engine Optimization (AEO & GEO)",subtitle:"AI Citations, Structured Schema & Position-Zero Authority",accent:"#3a53ed",verifiedBadge:"7 Clients & Enterprise Brand (Verified)",topKpis:[{value:"+36%",label:"AI & ZERO-CLICK IMPRESSIONS",sub:"Average increase across 7 clients"},{value:"+44%",label:"POSITION-ZERO LIFT",sub:"Conversational Q&A capture rate"},{value:"+28%",label:"BRAND CITATION SHARE",sub:"Google AI Overviews & Perplexity"},{value:"41%",label:"FEATURED SNIPPETS",sub:"Targeted commercial keywords"}],pillars:[{num:"PILLAR 01",badge:"CONVERSATIONAL Q&A",title:"Conversational Q&A Content Structuring",desc:"Restructured content into conversational Q&A formats, boosting position-zero capture by 44%."},{num:"PILLAR 02",badge:"STRUCTURED SCHEMA",title:"Conversational & Speakable Schema Markup",desc:"Deployed FAQ and speakable schema across 7 domains, boosting AI impressions by 36%."},{num:"PILLAR 03",badge:"GENERATIVE ENGINES",title:"AI Overview & Perplexity Optimization",desc:"Optimized brand footprints for ChatGPT and Perplexity, growing citation share by 28%."},{num:"PILLAR 04",badge:"FEATURED SNIPPETS",title:"Commercial Entity Snippet Domination",desc:"Secured featured snippets on 41% of commercial queries via clear entity markup."}],ctaSubject:"Aevis & AEO Strategy",singleCta:!0,ctaLabel:"Let's talk about Aevis",ctaMessage:"Hi Ismail, let's talk about Aevis."},aeocase:{tag:"AI CITATIONS & GENERATIVE SEARCH",category:"CASE // GOOGLE AI OVERVIEWS · PERPLEXITY · CHATGPT",title:"Growing Brand Visibility Across AI Search",subtitle:"Answer Engine Optimization, Structured Schema & Position-Zero Capture",metaLine:"Confidential Client · AEO Strategy · AI Search · 6 Months",accent:"#3a53ed",verifiedBadge:"AEO CASE STUDY",topKpis:[{value:"+16%",label:"AI IMPRESSIONS",sub:"Average increase across client domains"},{value:"+20%",label:"POSITION-ZERO LIFT",sub:"Conversational Q&A capture rate"},{value:"41%",label:"FEATURED SNIPPETS",sub:"Targeted commercial search queries"},{value:"+14%",label:"CITATION SHARE",sub:"Google AI Overviews & Perplexity AI"}],pillars:[{num:"PILLAR 01",badge:"AI AUDIT & INTENT",title:"Query Mapping & Citation Audit",desc:"Audit target queries and brand visibility across AI search."},{num:"PILLAR 02",badge:"CONTENT ARCHITECTURE",title:"Direct-Answer & Q&A Formatting",desc:"Restructured content for clearer answers and easier extraction."},{num:"PILLAR 03",badge:"STRUCTURED DATA",title:"Entity & Conversational Schema",desc:"Improved structured data and entity signals for machine-readable content."},{num:"PILLAR 04",badge:"MEASUREMENT & OPTIMIZATION",title:"Measurement & Optimization",desc:"Tracked AI visibility, citations and search performance."}],ctaSubject:"AEO & AI Search Strategy"},seocase:{tag:"SEO & ORGANIC GROWTH",category:"CASE // GOOGLE SEARCH · ORGANIC VISIBILITY · SEO",title:"Growing Organic Search Visibility",subtitle:"Technical SEO, Topic Clusters & Search Intent Optimization",metaLine:"Confidential Client · SEO Strategy · Organic Search · 6 Months",accent:"#3a53ed",verifiedBadge:"SEO CASE STUDY",topKpis:[{value:"+32%",label:"ORGANIC TRAFFIC",sub:"12K → 16.5K monthly sessions"},{value:"41%",label:"FEATURED SNIPPETS",sub:"Target commercial search queries"},{value:"+18%",label:"POSITION-ZERO LIFT",sub:"Search intent & Q&A capture rate"},{value:"+12%",label:"REVENUE UPLIFT",sub:"Launch window sales contribution"}],pillars:[{num:"PILLAR 01",badge:"SEARCH INTENT",title:"Search Intent & Topic Mapping",desc:"Mapped priority topics around user intent and commercial relevance."},{num:"PILLAR 02",badge:"CONTENT STRATEGY",title:"Topic-Cluster Content",desc:"Built interconnected content around priority search themes."},{num:"PILLAR 03",badge:"TECHNICAL SEO",title:"Technical SEO",desc:"Improved site structure, internal linking and technical search visibility."},{num:"PILLAR 04",badge:"PERFORMANCE",title:"Measurement & Optimization",desc:"Tracked organic traffic, rankings and search performance over time."}],ctaSubject:"SEO & Organic Growth Strategy",ctaMessage:"Hi Ismail, let's talk about SEO and organic growth."},paidmediacase:{tag:"PAID MEDIA & PERFORMANCE ADS",category:"CASE // GOOGLE ADS · META ADS · E-COMMERCE",title:"Paid Media & ROAS Optimization",subtitle:"Audience Restructuring, Creative Testing & Conversion Funnels",metaLine:"Confidential Client · Paid Media Strategy · E-commerce / D2C · 90 Days",accent:"#ff6b35",verifiedBadge:"PAID MEDIA CASE STUDY",topKpis:[{value:"-22%",label:"CAC REDUCTION",sub:"Blended acquisition cost"},{value:"3.4x",label:"IMPROVED ROAS",sub:"Meta & Google Ads campaigns"},{value:"+27%",label:"SALES UPLIFT",sub:"Within 90-day scaling window"},{value:"90 Days",label:"TIMEFRAME",sub:"Audience & creative testing window"}],pillars:[{num:"PILLAR 01",badge:"AUDIENCE",title:"Audience Restructuring",desc:"Refined custom and lookalike segmentation across Meta and Google Ads."},{num:"PILLAR 02",badge:"CREATIVE TESTING",title:"Creative Testing",desc:"Deployed a systematic ad variation testing framework to combat ad fatigue."},{num:"PILLAR 03",badge:"FUNNEL OPTIMIZATION",title:"Funnel Optimization",desc:"Aligned ad messaging with landing pages to boost overall conversion rates."}],ctaSubject:"Paid Advertising & Media Buying Strategy",ctaMessage:"Hi Ismail, let's talk about Paid Advertising and ROAS optimization."},analytics:{tag:"AI AUTOMATION & GA4 ATTRIBUTION",category:"CASE // CLAUDE API · GA4 · LOOKER STUDIO",title:"AI Automation & Attribution Intelligence",subtitle:"Claude API Pipelines, GA4 Dashboards & Attribution Audits",accent:"#a855f7",verifiedBadge:"Production Workflows (Verified)",topKpis:[{value:"-58%",label:"CYCLE TIME REDUCTION",sub:"Claude & Anthropic API automation"},{value:"6 hrs/wk",label:"SAVED PER WEEK",sub:"Automated GA4 dashboards"},{value:"5+ hrs/mo",label:"SAVED PER CLIENT",sub:"Eliminated manual reporting"},{value:"1.8x → 3.9x",label:"ROAS GAIN",sub:"Attribution audit reallocations"}],pillars:[{num:"PILLAR 01",badge:"CLAUDE AI PIPELINES",title:"Claude & Anthropic API Automation",desc:"Automated reporting workflows with Claude and Anthropic API, reducing cycle time by 58%."},{num:"PILLAR 02",badge:"GA4 DASHBOARDS",title:"Automated GA4 Reporting Dashboards",desc:"Built real-time GA4 dashboards, eliminating 6 hours per week of manual reporting."},{num:"PILLAR 03",badge:"CLIENT EFFICIENCY",title:"Reporting Time Savings (5+ hrs/client)",desc:"Replaced slide decks with automated KPI pipelines, saving 5+ hours per client monthly."},{num:"PILLAR 04",badge:"ATTRIBUTION AUDITS",title:"Cross-Channel Attribution Audits",desc:"Conducted monthly attribution audits to redirect spend into top-ROAS cohorts, reaching 3.9x ROAS."}],ctaSubject:"Analytics & AI Automation Strategy"}},O={name:"Aevis",kicker:"Autonomous AI Agent",headline:"Be the brand AI recommends.",value:"Ensures your brand is cited and recommended when buyers search across ChatGPT, Perplexity, or Claude.",href:"/aeokiller/?code=1212",benefits:[{icon:"radar",title:"Live Citation Radar",desc:"Monitor brand visibility and citation share across AI search engines in real time."},{icon:"gap",title:"Competitor Intelligence",desc:"Identify competitor gaps and uncover queries where your brand can win citations."},{icon:"agent",title:"Autonomous Optimization",desc:"Continuously optimize structured knowledge so answer engines cite your brand first."}]},be=[{key:"aevis",title:"Aevis",tagline:"AI Citation Audit & Brand Visibility Platform",desc:"Dark-mode conversion architecture, live citation audit UI, and automated lead funnels.",icon:"aevis",logo:"/assets/logos/aevis-new.svg",isFlagship:!0,tags:["Flagship Venture","Conversion Design","AI SaaS"],accent:"#3a53ed",href:"/aeokiller/"},{key:"nexus",title:"Nexus Website Manager",tagline:"Browser Workspace & Reference Organizer",desc:"Local-first browser workspace turning saved links and daily discovery into four clear views.",icon:"nexus",logo:"/assets/logos/nexus-new.svg",tags:["Landing Pages","UI/UX Design","CRO"],accent:"#8b5cf6",href:"/projects/nexus/index.html"},{key:"prepflow",title:"PrepFlow",tagline:"Nutrition & Weekly Meal Prep Experience",desc:"Mobile onboarding and meal prep UX built for frictionless fitness subscriber acquisition.",icon:"prepflow",logo:"/assets/logos/prepflow-new.svg",tags:["Mobile Landing","UI/UX Design","Funnel Design"],accent:"#d8ff55",href:"/projects/prepflow/index.html"},{key:"promptilo",title:"Promptilo",tagline:"Visual AI Prompt & Resource Directory",desc:"Bento-grid directory organizing curated AI prompts, workflows, and tools with clean IA.",icon:"promptilo",logo:"/assets/logos/promptilo-new.svg",tags:["Design Systems","Web UI","Information Architecture"],accent:"#7a82ff",href:"/projects/promptilo/index.html"},{key:"skinny",title:"Skinny",tagline:"Calm Daily Skincare & Habit Timeline",desc:"Minimalist iOS interface uniting skincare, supplements, and routines with zero clutter.",icon:"skinny",logo:"/assets/logos/skinny-new.svg",tags:["Visual Hierarchy","iOS UI/UX","Product Craft"],accent:"#8d4c79",href:"/projects/skinny/index.html"},{key:"timer-gym",title:"Timer Gym",tagline:"High-Contrast Tactical Workout Timer",desc:"Glanceable interval workout interface driven by voice, audio cues, and haptics.",icon:"timer-gym",logo:"/assets/logos/timer-gym-new.svg",tags:["Design Ergonomics","Tactile UI","Mobile App"],accent:"#a9f76d",href:"/projects/timer-gym/index.html"},{key:"voicy",title:"Voicy",tagline:"Native macOS Voice-to-Text Layer",desc:"Apple HIG menu bar utility turning speech into clean, formatted text with zero clutter.",icon:"voicy",logo:"/assets/logos/voicy-new.svg",tags:["Apple HIG","Desktop UI","Productivity Design"],accent:"#8a70ff",href:"/projects/voicy/index.html"}],ye=[{year:"2025",route:"DOH",company:"Independent",initial:"I",href:"https://www.linkedin.com/in/ismail-bettoumi-868b04402/",current:!0,role:"Digital Marketing Consultant",dates:"Jan 2025 — Present",desc:"Manage social media marketing, content planning, SEO, and paid advertising for 5 clients across retail, food and beverage, and professional services. Refine Shopify product pages and checkout journeys for 6 retail brands. Use Claude and the Anthropic API to streamline content and reporting, and campaign data to guide budget adjustments.",projects:["aeo","shopify","analytics"]},{year:"2024",company:"Andalus Smart Way",initial:"A",href:"https://www.linkedin.com/in/ismail-bettoumi-868b04402/",role:"Senior Marketing Specialist",dates:"Jan 2024 — Dec 2024",desc:"Contributed to Instagram content for @andalus_media, planning content calendars and coordinating organic posts and paid social campaigns. Grew monthly organic website traffic by 47% in 6 months. Raised Google Ads Quality Score from 4 to 8, reduced wasted ad spend by 34%, and contributed to a 29% revenue uplift during key product-launch windows.",projects:["seo"]},{year:"2023",route:"ALG",company:"Zer",initial:"Z",href:"https://www.linkedin.com/in/ismail-bettoumi-868b04402/",role:"Marketing Specialist",dates:"Jan 2023 — Dec 2023",desc:"Supported B2B lead generation through paid search, SEO, and email campaigns. Launched and tested 6 Google and Meta Ads campaigns, refining audiences and creative based on costs and engagement. Built automated email sequences, monitored advertising budgets, and maintained GA4 dashboards to track campaign results.",projects:["paidmedia","email"]}],j=matchMedia("(prefers-reduced-motion: reduce)"),$={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{localStorage.setItem(e,t)}catch{}}},Ae='<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0c.8 0 1.3 1 1.3 2.4v2.2l6.1 3.5v1.7L9.3 8v3.6l2 1.4v1.4L8 13.5l-3.3.9V13l2-1.4V8L.6 9.8V8.1l6.1-3.5V2.4C6.7 1 7.2 0 8 0Z"/></svg>',U=e=>`/assets/${e}.jpg`,x={discount:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-6 9 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><circle cx="12" cy="12" r="3"/><path d="m14 10-4 4"/></svg>',knowledge:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M4 7l8-4 8 4M4 17l8 4 8-4M4 7v10M20 7v10"/><circle cx="12" cy="3" r="1.5" fill="currentColor"/><circle cx="4" cy="7" r="1.5" fill="currentColor"/><circle cx="20" cy="7" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="4" cy="17" r="1.5" fill="currentColor"/><circle cx="20" cy="17" r="1.5" fill="currentColor"/><circle cx="12" cy="21" r="1.5" fill="currentColor"/></svg>',seo:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/><path d="M8 12.5 10.5 10l2 2 3-3"/><path d="M13 9h2.5V11.5"/></svg>',paidmedia:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22"/></svg>',shopify:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8.5h12l1.2 11a2 2 0 0 1-2 2.1H6.8a2 2 0 0 1-2-2.1L6 8.5Z"/><path d="M9 10V6.5a3 3 0 0 1 6 0V10"/><path d="m10 14.5 1.5 1.5L14.5 13"/></svg>',email:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 7.2 5.4a1.3 1.3 0 0 0 1.6 0L20 7"/></svg>',analytics:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20.5h18"/><path d="M7 17v-4M12 17V9M17 17V6.5"/><path d="m5.5 11 4.5-4 4 3 5-5.5"/><circle cx="19" cy="4.5" r="1.3" fill="currentColor"/></svg>',aeo:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M5.6 18.4l2.2-2.2M16.2 7.8l2.2-2.2"/></svg>',aeokiller:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M5.6 18.4l2.2-2.2M16.2 7.8l2.2-2.2"/></svg>',aevis:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M5.6 18.4l2.2-2.2M16.2 7.8l2.2-2.2"/></svg>',nexus:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3.5"/><path d="M3 9.5h18"/><circle cx="6.8" cy="6.8" r="1" fill="currentColor"/><circle cx="10.2" cy="6.8" r="1" fill="currentColor"/><path d="m7.5 15.5 4.5-3.5 4.5 3.5M12 12v5.5"/></svg>',prepflow:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5h16a8 8 0 0 1-16 0Z"/><path d="M8 5c.5 1.2.5 2.2 0 3.5M12 4c.5 1.5.5 2.8 0 4.5M16 5c.5 1.2.5 2.2 0 3.5M3 19.5h18"/></svg>',promptilo:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2.5 2.6 6.2 6.4 2.3-6.4 2.3L12 19.5l-2.6-6.2L3 11l6.4-2.3L12 2.5Z"/><path d="M18.5 16.5l.8 1.8 1.7.7-1.7.8-.8 1.7-.7-1.7-1.8-.8 1.8-.7.7-1.8Z"/></svg>',skinny:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5.5" y="4" width="13" height="16" rx="6.5"/><path d="M5.5 12h13"/><circle cx="12" cy="8" r="1.2" fill="currentColor"/><circle cx="12" cy="16" r="1.2" fill="currentColor"/></svg>',"timer-gym":'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 1.5M9.5 3.5h5M12 3.5v2.5M18 6.5l1.2 1.2"/></svg>',timergym:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 1.5M9.5 3.5h5M12 3.5v2.5M18 6.5l1.2 1.2"/></svg>',voicy:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8"/></svg>'},Ce={radar:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 12l5-5"/><path d="M12 3a9 9 0 0 1 9 9"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>',gap:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><circle cx="12" cy="12" r="3"/></svg>',agent:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C12 7.5 7.5 12 2 12c5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10Z"/></svg>'},we=e=>{const t=B[e];if(!t)return"";const a=t.icon?`<span class="case-icon case-icon-${t.icon}" aria-hidden="true">${x[t.icon]}</span>`:"";return`<li><button type="button" class="case is-strategy-trigger" data-strategy="${e}"><span class="tl-dot tl-dot-case"></span>${a}<span class="case-text"><span class="case-title">${t.title}</span><span class="case-desc">${t.desc}</span></span><span class="case-arrow" aria-hidden="true">↗</span></button></li>`},Se=e=>{const t=e.logo?`<span class="case-icon case-icon-app case-icon-${e.key}" aria-hidden="true"><img src="${e.logo}" alt="${e.title}" class="case-badge-img" width="36" height="36" loading="lazy" /></span>`:`<span class="case-icon case-icon-${e.key}" aria-hidden="true">${x[e.icon]||x[e.key]||""}</span>`,a=e.isFlagship?'<span class="case-flagship-pill">Flagship</span>':"";return`<li><a class="case" href="${e.href}" target="_blank" rel="noopener noreferrer"><span class="tl-dot tl-dot-case"></span>${t}<span class="case-text"><span class="case-title">${e.title} ${a}</span><span class="case-desc">${e.desc}</span></span><span class="case-arrow" aria-hidden="true">↗</span></a></li>`};document.querySelector("#app").innerHTML=`
<a class="skip-content" href="#journey">Skip to experience</a>
<main class="folio booting" id="portfolio" tabindex="-1" inert>
<aside class="folio-sticky"><span class="fs-rail" aria-hidden="true"></span><div class="fs-lines"><h1 class="fs-name">${b.name}</h1><p>${b.location}</p><p><a href="tel:+97470773838" class="fs-phone">${b.phone}</a></p></div></aside>
<section class="interview-card" aria-label="Talk to Ismail's AI agent">
  <div class="interview-card-heading"><strong>Interview me</strong><span>through my AI agent</span></div>
  <elevenlabs-convai agent-id="agent_2301m37nyj2sev593dq6rbeyxq77" action-text="Interview me through my AI agent"></elevenlabs-convai>
</section>
<div class="folio-col">
<div class="folio-window reveal"><div class="plane-window"><div class="sky"><img class="cloud cloud-one" src="/assets/cloud.png" alt=""><img class="cloud cloud-two" src="/assets/cloud.png" alt=""><span class="sky-glow"></span></div><img class="window-layer back" src="/assets/window-back.webp" alt=""><div class="shade-clip"><img class="window-shade" src="/assets/window-shutter.webp" alt=""></div><img class="window-layer front" src="/assets/window-front.webp" alt=""><button class="shade-control" type="button" aria-label="Close the window shade" aria-pressed="false" title="Drag the shade to switch between day and night"></button></div></div>
<div class="folio-intro reveal">
  <h2 class="folio-tagline">${b.tagline}</h2>
  <p class="folio-sub">${b.intro}</p>
  <div class="intro-spot-row">
    <a href="/Ismail_Bettoumi_CV.pdf" target="_blank" rel="noopener noreferrer" class="intro-spot-pill intro-cv-pill" title="Open Ismail Bettoumi CV (PDF)">
      <span class="spot-pulse" aria-hidden="true"></span>
      <span class="spot-pill-txt">Resume / CV</span>
      <span class="spot-pill-tag">PDF ↗</span>
    </a>
  </div>
</div>

<section class="folio-track" id="journey" aria-label="Career flight plan">
<div class="plan-head reveal" aria-hidden="true"><span class="plan-label">Flight plan</span><span class="plan-plane">${Ae}</span></div>
<div class="folio-path" aria-hidden="true"><svg class="path-curve" viewBox="0 0 44 110"><defs><clipPath id="flight-path-reveal" clipPathUnits="userSpaceOnUse"><rect class="path-reveal" x="-8" y="-8" width="60" height="0"/></clipPath></defs><path class="pc-dots" d="M44 0 V25 C44 65 0 40 0 80 V110" fill="none"/><path class="pc-lit" d="M44 0 V25 C44 65 0 40 0 80 V110" fill="none" clip-path="url(#flight-path-reveal)"/></svg><div class="path-rail"><div class="path-lit"></div><span class="path-glow"></span><svg class="path-tip" viewBox="0 0 8 4"><path d="m1 1 3 2 3-2"/></svg></div></div>
<ol class="folio-timeline">${ye.map(e=>`<li class="tl-entry"><div class="tl-head"><span class="tl-year">${e.route?`<span class="tl-route">${e.route}</span>`:""}<span class="tl-yearnum">${e.year}</span></span><span class="tl-dot tl-dot-${e.current?"now":"past"}" aria-hidden="true"></span><h2 class="tl-company">${e.href?`<a href="${e.href}" target="_blank" rel="noopener noreferrer">${e.company}</a>`:e.company}</h2>${e.current?'<span class="tl-badge">Current</span>':""}</div><div class="tl-body"><h3 class="tl-role">${e.role}</h3><p class="tl-desc">${e.desc}</p><p class="tl-dates">${e.dates}</p></div>${e.projects?`<ul class="tl-cases">${e.projects.map(we).join("")}</ul>`:""}</li>`).join("")}
<li class="tl-entry tl-entry-case-study">
  <div class="tl-head">
    <span class="tl-year"><span class="tl-route">CASE</span><span class="tl-yearnum">2025</span></span>
    <span class="tl-dot tl-dot-now" aria-hidden="true"></span>
    <h2 class="tl-company"><button type="button" class="tl-title-btn is-strategy-trigger" data-strategy="aeocase">Case Study</button></h2>
    <span class="tl-badge">AEO & AI Search</span>
  </div>
  <div class="tl-body">
    <h3 class="tl-role">Growing Brand Visibility Across AI Search</h3>
    <div class="tl-case-breakdown">
      <div class="tl-case-row">
        <span class="tl-case-label">Problem</span>
        <p class="tl-case-val">Complete lack of brand visibility and zero citations in generative AI search engines.</p>
      </div>
      <div class="tl-case-row">
        <span class="tl-case-label">Industry</span>
        <p class="tl-case-val">B2B / SaaS</p>
      </div>
      <div class="tl-case-row">
        <span class="tl-case-label">What I Did</span>
        <p class="tl-case-val">Conducted AI citation audits, restructured content for direct-answer Q&A formatting, deployed entity-level structured data schema, and tracked conversational search queries over 6 months.</p>
      </div>
      <div class="tl-case-row tl-case-row-result">
        <span class="tl-case-label">Result</span>
        <p class="tl-case-val tl-case-val-result">+16% AI impressions, +20% conversational Q&A capture rate, and +14% citation share across AI engines.</p>
      </div>
    </div>
  </div>
  <ul class="tl-cases">
    <li>
      <button type="button" class="case is-strategy-trigger" data-strategy="aeocase">
        <span class="tl-dot tl-dot-case"></span>
        <span class="case-icon case-icon-aeo" aria-hidden="true">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/>
          </svg>
        </span>
        <span class="case-text">
          <span class="case-title">AEO Citation Growth & AI Visibility <span class="case-flagship-pill">Case Study</span></span>
          <span class="case-desc">Answer Engine Optimization (AEO), generative search visibility, structured schema & measurement framework.</span>
        </span>
        <span class="case-arrow" aria-hidden="true">↗</span>
      </button>
    </li>
  </ul>
</li>
<li class="tl-entry tl-entry-case-study">
  <div class="tl-head">
    <span class="tl-year"><span class="tl-route">CASE</span><span class="tl-yearnum">2024</span></span>
    <span class="tl-dot tl-dot-now" aria-hidden="true"></span>
    <h2 class="tl-company"><button type="button" class="tl-title-btn is-strategy-trigger" data-strategy="seocase">Case Study</button></h2>
    <span class="tl-badge">SEO & Organic Growth</span>
  </div>
  <div class="tl-body">
    <h3 class="tl-role">Growing Organic Search Visibility</h3>
    <div class="tl-case-breakdown">
      <div class="tl-case-row">
        <span class="tl-case-label">Problem</span>
        <p class="tl-case-val">Stagnant organic traffic and low keyword rankings in traditional search channels.</p>
      </div>
      <div class="tl-case-row">
        <span class="tl-case-label">Industry</span>
        <p class="tl-case-val">E-commerce / Digital Growth</p>
      </div>
      <div class="tl-case-row">
        <span class="tl-case-label">What I Did</span>
        <p class="tl-case-val">Mapped priority search intent, built interconnected topic-cluster content architectures, fixed site structure and internal linking via technical SEO, and optimized for featured snippets.</p>
      </div>
      <div class="tl-case-row tl-case-row-result">
        <span class="tl-case-label">Result</span>
        <p class="tl-case-val tl-case-val-result">+32% organic traffic growth (12K to 16.5K monthly sessions), +18% position-zero lift, and +12% revenue uplift.</p>
      </div>
    </div>
  </div>
  <ul class="tl-cases">
    <li>
      <button type="button" class="case is-strategy-trigger" data-strategy="seocase" data-case="seo-organic-growth">
        <span class="tl-dot tl-dot-case"></span>
        <span class="case-icon case-icon-seo" aria-hidden="true">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2C12 7.5 7.5 12 2 12c5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10Z"/>
          </svg>
        </span>
        <span class="case-text">
          <span class="case-title">SEO & Organic Growth Engineering <span class="case-flagship-pill">Case Study</span></span>
          <span class="case-desc">Topic clusters, technical site health, position-zero capture & commercial search intent optimization.</span>
        </span>
        <span class="case-arrow" aria-hidden="true">↗</span>
      </button>
    </li>
  </ul>
</li>
<li class="tl-entry tl-entry-case-study">
  <div class="tl-head">
    <span class="tl-year"><span class="tl-route">CASE</span><span class="tl-yearnum">2023</span></span>
    <span class="tl-dot tl-dot-now" aria-hidden="true"></span>
    <h2 class="tl-company"><button type="button" class="tl-title-btn is-strategy-trigger" data-strategy="paidmediacase">Case Study</button></h2>
    <span class="tl-badge">Paid Advertising</span>
  </div>
  <div class="tl-body">
    <h3 class="tl-role">Paid Media & ROAS Optimization</h3>
    <div class="tl-case-breakdown">
      <div class="tl-case-row">
        <span class="tl-case-label">Problem</span>
        <p class="tl-case-val">High Customer Acquisition Cost (CAC) and low Return on Ad Spend (ROAS).</p>
      </div>
      <div class="tl-case-row">
        <span class="tl-case-label">Industry</span>
        <p class="tl-case-val">E-commerce / D2C</p>
      </div>
      <div class="tl-case-row">
        <span class="tl-case-label">Strategy</span>
        <div class="tl-case-val tl-case-pillars-inline">
          <p><strong>01. Audience Restructuring:</strong> Refined custom and lookalike segmentation across Meta and Google Ads.</p>
          <p><strong>02. Creative Testing:</strong> Deployed a systematic ad variation testing framework to combat ad fatigue.</p>
          <p><strong>03. Funnel Optimization:</strong> Aligned ad messaging with landing pages to boost overall conversion rates.</p>
        </div>
      </div>
      <div class="tl-case-row tl-case-row-result">
        <span class="tl-case-label">Result</span>
        <p class="tl-case-val tl-case-val-result">-22% reduction in CAC, an improved ROAS of 3.4x, and a +27% sales uplift within 90 days.</p>
      </div>
    </div>
  </div>
  <ul class="tl-cases">
    <li>
      <button type="button" class="case is-strategy-trigger" data-strategy="paidmediacase" data-case="paid-media">
        <span class="tl-dot tl-dot-case"></span>
        <span class="case-icon case-icon-paidmedia" aria-hidden="true">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22"/>
          </svg>
        </span>
        <span class="case-text">
          <span class="case-title">Paid Media & ROAS Optimization <span class="case-flagship-pill">Case Study</span></span>
          <span class="case-desc">Audience restructuring, multivariate creative testing & high-converting landing page funnel alignment.</span>
        </span>
        <span class="case-arrow" aria-hidden="true">↗</span>
      </button>
    </li>
  </ul>
</li>
<li class="tl-entry tl-entry-products">
  <div class="tl-head">
    <span class="tl-dot tl-dot-past" aria-hidden="true"></span>
    <h2 class="tl-company">Landing pages I built</h2>
  </div>
  <p class="landing-note">A few examples of my landing-page design and build work.</p>
  <ul class="landing-links" aria-label="Landing page projects">
    ${be.map(e=>`<li><a class="landing-link" href="${e.href}" target="_blank" rel="noopener noreferrer"><img src="${e.logo}" alt="" width="24" height="24" loading="lazy"><span>${e.key==="nexus"?"Nexus":e.title}</span><span class="landing-arrow" aria-hidden="true">↗</span></a></li>`).join("")}
  </ul>
</li>
</ol>
<div class="folio-outro reveal">
  <div class="outro-text">
    <p class="outro-title">Thank you for flying. Let's grow something together.</p>
    <a href="${b.whatsapp}?text=${encodeURIComponent("Hi Ismail, let's talk.")}" target="_blank" rel="noopener noreferrer" class="outro-whatsapp-cta">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.39C4.54 15.14 4.12 13.68 4.12 12.18C4.12 7.64 7.82 3.67 12.05 3.67M9.04 7.67C8.88 7.67 8.63 7.73 8.42 7.96C8.21 8.19 7.62 8.74 7.62 9.87C7.62 11 8.44 12.09 8.56 12.24C8.67 12.4 10.18 14.72 12.49 15.72C13.04 15.96 13.47 16.1 13.8 16.21C14.36 16.39 14.86 16.36 15.26 16.3C15.71 16.23 16.64 15.74 16.83 15.2C17.03 14.67 17.03 14.21 16.97 14.12C16.91 14.03 16.76 13.97 16.53 13.86C16.3 13.74 15.18 13.19 14.97 13.11C14.76 13.04 14.61 13 14.45 13.23C14.3 13.46 13.87 13.97 13.74 14.12C13.61 14.28 13.48 14.3 13.25 14.18C13.02 14.07 12.28 13.83 11.41 13.05C10.73 12.44 10.27 11.69 10.14 11.47C10.01 11.24 10.13 11.11 10.24 11C10.35 10.89 10.48 10.72 10.6 10.59C10.71 10.45 10.76 10.35 10.83 10.2C10.91 10.05 10.87 9.92 10.81 9.8C10.76 9.69 10.3 8.56 10.11 8.11C9.92 7.67 9.73 7.73 9.58 7.72C9.44 7.71 9.28 7.71 9.12 7.71L9.04 7.67Z"/></svg>
      <span>Let's talk</span>
      <span aria-hidden="true" style="font-size: 11px;">↗</span>
    </a>
  </div>
</div>
</section>
</div>
<div class="folio-footer-fx" aria-hidden="true"><div class="pb pb1"></div><div class="pb pb2"></div><div class="pb pb3"></div><div class="pb pb4"></div><div class="pb pb5"></div><div class="folio-footer-tint"></div></div>
<footer class="folio-footer"><nav class="ff-links" aria-label="Portfolio links"><button class="ff-link" id="return-gate"><span class="ff-link-label">Return to gate</span></button><a class="ff-link" href="/Ismail_Bettoumi_CV.pdf" target="_blank" rel="noopener noreferrer"><span class="ff-link-label">CV / Resume</span></a><a class="ff-link" href="${b.whatsapp}" target="_blank" rel="noopener noreferrer"><span class="ff-link-label">WhatsApp</span></a><a class="ff-link" href="${b.linkedin}" target="_blank" rel="noopener noreferrer"><span class="ff-link-label">LinkedIn</span></a></nav></footer>
</main>
<div class="pass-stage" id="gate" tabindex="-1" role="dialog" aria-modal="true" aria-label="Welcome aboard Ismail's portfolio">
  <div class="pass-canvas" id="scanner"></div>
  <button class="scan-keyboard" id="scan-pass">Scan Boarding Pass</button>
  <div class="scan-arrow-guide" id="scan-arrow" role="button" tabindex="0" aria-label="Scan boarding pass">
    <div class="scan-arrow-disc">
      <svg class="scan-arrow-svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="12" y1="4" x2="12" y2="18"></line>
        <polyline points="18 12 12 18 6 12"></polyline>
      </svg>
    </div>
  </div>
  <div class="gate-actions-wrap">
    <p class="pass-hint shimmer" id="pass-status" role="status" aria-live="polite">Click or swipe boarding pass to enter</p>
    <button class="quick-scan-pill" id="quick-scan-btn" type="button" aria-label="Scan boarding pass and enter portfolio">
      <span class="qsp-glow" aria-hidden="true"></span>
      <span class="qsp-icon" aria-hidden="true">
        <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
          <path d="M17 7V5a2 2 0 0 0-2-2h-2"/>
          <path d="M3 13v2a2 2 0 0 0 2 2h2"/>
          <path d="M17 13v2a2 2 0 0 1-2 2h-2"/>
          <line x1="3" y1="10" x2="17" y2="10"/>
        </svg>
      </span>
      <span class="qsp-label">Tap to Scan</span>
      <span class="qsp-arrow" aria-hidden="true">→</span>
    </button>
  </div>
  <button class="skip-link" id="skip-intro">Skip</button>
</div>
<dialog class="memory-dialog"><button class="close-dialog" aria-label="Close image"><svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg></button><img alt=""><p></p></dialog>
<dialog class="aeo-modal-dialog" id="aeo-dialog" aria-labelledby="aeo-modal-title">
  <div class="aeo-modal-box">
    <button class="aeo-close-btn" id="close-aeo-btn" aria-label="Close dialog">
      <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg>
    </button>
    <div class="aeo-modal-header">
      <div class="aeo-pill-badge">
        <span class="aeo-badge-dot" aria-hidden="true"></span>
        <span>${O.kicker}</span>
      </div>
      <h2 class="aeo-modal-title" id="aeo-modal-title">${O.name}</h2>
      <p class="aeo-modal-tagline">${O.headline}</p>
      <p class="aeo-modal-summary">${O.value}</p>
    </div>
    <div class="aeo-features-list">
      ${O.benefits.map(e=>`
        <div class="aeo-feature-item">
          <div class="aeo-feature-icon-box" aria-hidden="true">
            ${Ce[e.icon]||x.aevis}
          </div>
          <div class="aeo-feature-text">
            <h3 class="aeo-feature-title">${e.title}</h3>
            <p class="aeo-feature-desc">${e.desc}</p>
          </div>
        </div>
      `).join("")}
    </div>
    <div class="aeo-modal-cta-wrap">
      <a href="${O.href}" target="_blank" rel="noopener noreferrer" class="aeo-apple-cta" id="aeo-discover-btn">
        <span>Discover More</span>
        <svg class="aeo-cta-arrow" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
      </a>
    </div>
  </div>
</dialog>
<dialog class="strategy-modal-dialog" id="strategy-dialog" aria-labelledby="strategy-modal-title">
  <div class="strategy-modal-box">
    <button class="strategy-close-btn" id="close-strategy-btn" aria-label="Close dialog">
      <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg>
    </button>
    <div class="strategy-modal-content" id="strategy-modal-content"></div>
  </div>
</dialog>`;const d=document.querySelector("#portfolio"),f=document.querySelector("#gate"),le=document.querySelector(".interview-card"),ke=le.querySelector("elevenlabs-convai");customElements.whenDefined("elevenlabs-convai").then(()=>{const e=ke.shadowRoot;if(!e)return;const t=()=>{le.classList.toggle("agent-open",!!e.querySelector('button[aria-label="Collapse"]'))};new MutationObserver(t).observe(e,{childList:!0,subtree:!0}),t()});const n=document.createElement("main");n.className="case-page";n.hidden=!0;n.tabIndex=-1;document.querySelector("#app").append(n);let l=null,E=!1;function p(){E||(E=!0,sessionStorage.setItem("yb:entered","1"),$.set("yb:boarded","1"),f.classList.add("leaving"),d.inert=!1,n.inert=!1,document.documentElement.classList.remove("is-covered"),d.classList.remove("booting"),d.classList.add("entering"),n.hidden||n.classList.add("entering"),I(),setTimeout(()=>{f.hidden=!0,l?.dispose(),l=null,d.classList.remove("entering"),n.classList.remove("entering"),(n.hidden?d:n).focus({preventScroll:!0})},j.matches?0:600))}async function ce(){E=!1,f.hidden=!1,f.classList.remove("leaving"),d.inert=!0,d.classList.add("booting"),d.classList.remove("entering"),n.classList.remove("entering"),document.documentElement.classList.add("is-covered"),window.scrollTo(0,0);const e=document.querySelector("#pass-status");e.textContent="Click or swipe boarding pass to enter",e.classList.remove("granted"),await Promise.race([document.fonts?.ready??Promise.resolve(),new Promise(t=>setTimeout(t,800))]);try{const{mountScanner:t}=await oe(async()=>{const{mountScanner:s}=await import("./scanner-BjELVn2x.js");return{mountScanner:s}},__vite__mapDeps([0,1]));if(E)return;l=t(document.querySelector("#scanner"),{onSuccess(){e.classList.remove("shimmer"),e.classList.add("granted"),e.innerHTML='<span class="status-check" aria-hidden="true">✓</span> Access granted',setTimeout(p,j.matches?0:280)},onStatus(s){e.textContent=s},reduced:j.matches});const a=document.querySelector("#scan-pass");a&&(a.onclick=()=>l.scan())}catch(t){e.textContent="Welcome aboard. Enter to explore.",document.querySelector("#scan-pass").classList.add("fallback"),document.querySelector("#scan-pass").onclick=p,console.warn("3D scanner unavailable; accessible entry enabled.",t)}f.focus({preventScroll:!0})}document.querySelector("#skip-intro").onclick=p;const Q=document.querySelector("#pass-status");Q&&(Q.onclick=e=>{e.stopPropagation(),l?l.scan():p()});const X=document.querySelector("#scan-pass");X&&(X.onclick=e=>{e.stopPropagation(),l?l.scan():p()});const G=document.querySelector("#scan-arrow");G&&(G.onclick=e=>{e.stopPropagation(),l?l.scan():p()},G.onkeydown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.stopPropagation(),l?l.scan():p())});const J=document.querySelector("#quick-scan-btn");J&&(J.onclick=e=>{e.stopPropagation(),l?l.scan():p()});const ee=document.querySelector("#return-gate");ee&&(ee.onclick=()=>{sessionStorage.removeItem("yb:entered"),$.set("yb:boarded","0"),ce()});f.onclick=e=>{e.target===f&&(l?l.scan():p())};f.addEventListener("wheel",e=>{Math.abs(e.deltaY)>30&&p()},{passive:!0});f.addEventListener("keydown",e=>{if((e.key==="Escape"||e.key==="Enter"||e.key===" ")&&p(),e.key==="Tab"){const t=document.querySelector("#scan-pass"),a=document.querySelector("#skip-intro");e.shiftKey&&document.activeElement===t?(e.preventDefault(),a.focus()):!e.shiftKey&&document.activeElement===a&&(e.preventDefault(),t.focus())}});let h=$.get("yb:theme")==="dark"?1:0,A=null;const D=document.querySelector(".plane-window"),k=document.querySelector(".shade-control");function N(e,t=!1){h=Math.max(0,Math.min(1,e)),D.style.setProperty("--shade",h),document.documentElement.dataset.theme=h>.52?"dark":"light",k.setAttribute("aria-pressed",String(h>.5)),k.setAttribute("aria-label",h>.5?"Open the window shade":"Close the window shade"),t&&$.set("yb:theme",h>.5?"dark":"light")}N(h);k.addEventListener("pointerdown",e=>{A={y:e.clientY,start:h,moved:!1},k.setPointerCapture(e.pointerId),D.classList.add("dragging")});k.addEventListener("pointermove",e=>{if(!A)return;const t=e.clientY-A.y;Math.abs(t)>4&&(A.moved=!0),N(A.start+t/171)});function Ee(){if(!A)return;const e=A.moved;A=null,D.classList.remove("dragging"),N(e?h>.5?1:0:h>.5?0:1,!0)}k.addEventListener("pointerup",Ee);k.addEventListener("pointercancel",()=>{A=null,D.classList.remove("dragging"),N(h>.5?1:0,!0)});k.addEventListener("click",e=>{e.detail===0&&N(h>.5?0:1,!0)});const te=document.querySelector(".folio-path"),Ie=document.querySelector(".path-rail"),Le=document.querySelector(".folio-track"),R=document.querySelector(".path-curve"),Oe=R.querySelectorAll("path"),de=R.querySelector(".path-reveal"),pe=[...document.querySelectorAll(".tl-dot")],ae=e=>Math.max(0,Math.min(1,e));let H=0,V=0,y;function Me(){V=0;const e=R.clientWidth||44,t=R.clientHeight||110,a=`M ${e} 0 V ${t*.23} C ${e} ${t*.58} 0 ${t*.42} 0 ${t*.78} V ${t}`;R.setAttribute("viewBox",`0 0 ${e} ${t}`),Oe.forEach(o=>o.setAttribute("d",a)),de.setAttribute("width",e+16);const s=window.scrollY,i=R.getBoundingClientRect(),r=Ie.getBoundingClientRect();y={curveTop:i.top+s,curveHeight:i.height,railTop:r.top+s,railHeight:r.height,dotY:pe.map(o=>{const c=o.getBoundingClientRect();return c.top+s+c.height/2})},ue()}function Re(){if(H=0,!y||d.hidden||!E)return;const e=window.scrollY+innerHeight*.52,t=window.scrollY+innerHeight>=document.documentElement.scrollHeight-3,a=j.matches||t,s=a?1:ae((e-y.curveTop)/y.curveHeight),i=a?1:ae((e-y.railTop)/y.railHeight);de.setAttribute("height",Math.max(0,s*y.curveHeight+8)),te.style.setProperty("--rail-p",i),te.style.setProperty("--rail-y",i*y.railHeight),pe.forEach((r,o)=>{const c=a||y.dotY[o]<=e;r.classList.contains("is-lit")!==c&&r.classList.toggle("is-lit",c)})}function ue(){H||(H=requestAnimationFrame(Re))}function I(){V||(V=requestAnimationFrame(Me))}window.addEventListener("scroll",ue,{passive:!0});window.addEventListener("resize",I,{passive:!0});window.addEventListener("load",I,{once:!0});new ResizeObserver(I).observe(Le);document.fonts?.ready.then(I);const m=document.querySelector("#strategy-dialog"),Pe=document.querySelector("#strategy-modal-content"),se=document.querySelector("#close-strategy-btn"),Te={"placeholder-seo":"seo","placeholder-media":"paidmedia","placeholder-shopify":"shopify"},u=document.querySelector(".memory-dialog");document.querySelectorAll("[data-memory]").forEach(e=>e.onclick=()=>{const t=Te[e.dataset.memory];t&&F[t]?C(t):(u.querySelector("img").src=U(e.dataset.memory),u.querySelector("img").alt=e.querySelector("img").alt,u.querySelector("p").textContent=e.querySelector("img").alt,u.showModal())});u.querySelector("button").onclick=()=>u.close();u.onclick=e=>{e.target===u&&u.close()};const P=document.querySelector("#aeo-dialog"),ie=document.querySelector("#open-aeo-btn"),ne=document.querySelector("#close-aeo-btn");function xe(e){const t=F[e];if(!t)return"";const s=`https://wa.me/97470773838?text=${t.ctaMessage?encodeURIComponent(t.ctaMessage):t.ctaLabel?encodeURIComponent(`Hi Ismail, ${t.ctaLabel.toLowerCase().startsWith("let's talk")?t.ctaLabel:`let's talk about ${t.ctaLabel}`}.`):encodeURIComponent(`Hi Ismail, I would like to discuss your ${t.ctaSubject||t.title} strategy.`)}`,i="https://www.linkedin.com/in/ismail-bettoumi-868b04402/",r=t.category?t.category.replace(/^CASE\s*\/\/\s*/i,""):"";return`
    <div class="dash-modal">
      <!-- Top Badges -->
      <div class="dash-header-bar">
        <div class="dash-pills-row">
          <span class="dash-pill-tag">${t.tag}</span>
          ${r?`<span class="dash-category-meta">${r}</span>`:""}
        </div>
        ${t.verifiedBadge?`
          <div class="dash-verified-tag">
            <svg class="dash-verified-icon" viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3.5 8.5 6.5 11.5 12.5 4.5"/></svg>
            <span>${t.verifiedBadge}</span>
          </div>
        `:""}
      </div>

      <!-- Title & Headline -->
      <div class="dash-title-wrap">
        <h2 class="dash-main-heading" id="strategy-modal-title">${t.title}</h2>
        <p class="dash-main-sub">${t.subtitle}</p>
        ${t.metaLine?`<p class="dash-meta-line">${t.metaLine}</p>`:""}
      </div>

      <!-- SECTION 1: THE RESULTS -->
      <div class="dash-section-block">
        <div class="dash-section-header">
          <span class="dash-section-eyebrow">Impact</span>
          <h3 class="dash-section-title">Key Results</h3>
        </div>
        <div class="dash-kpi-grid">
          ${t.topKpis.map(o=>`
            <div class="dash-kpi-tile">
              <div class="dash-kpi-val">${o.value}</div>
              <div class="dash-kpi-label">${o.label}</div>
              <div class="dash-kpi-note">${o.sub}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- SECTION 2: HOW WE GOT THEM -->
      <div class="dash-section-block">
        <div class="dash-section-header">
          <span class="dash-section-eyebrow">Strategy</span>
          <h3 class="dash-section-title">Execution Pillars</h3>
        </div>
        <div class="dash-pillars-2x2">
          ${t.pillars.map(o=>`
            <div class="dash-pillar-cell">
              <div class="dash-pillar-topline">
                <span class="dash-pillar-num">${o.num?o.num.replace(/^PILLAR\s*/i,""):""}</span>
                <span class="dash-pillar-chip">${o.badge}</span>
              </div>
              <h4 class="dash-pillar-title">${o.title}</h4>
              <p class="dash-pillar-desc">${o.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- DIRECT ACTIONS -->
      <div class="dash-action-bar">
        ${t.singleCta?`
          <a href="${s}" target="_blank" rel="noopener noreferrer" class="dash-cta-btn dash-cta-whatsapp dash-cta-single">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.39C4.54 15.14 4.12 13.68 4.12 12.18C4.12 7.64 7.82 3.67 12.05 3.67M9.04 7.67C8.88 7.67 8.63 7.73 8.42 7.96C8.21 8.19 7.62 8.74 7.62 9.87C7.62 11 8.44 12.09 8.56 12.24C8.67 12.4 10.18 14.72 12.49 15.72C13.04 15.96 13.47 16.1 13.8 16.21C14.36 16.39 14.86 16.36 15.26 16.3C15.71 16.23 16.64 15.74 16.83 15.2C17.03 14.67 17.03 14.21 16.97 14.12C16.91 14.03 16.76 13.97 16.53 13.86C16.3 13.74 15.18 13.19 14.97 13.11C14.76 13.04 14.61 13 14.45 13.23C14.3 13.46 13.87 13.97 13.74 14.12C13.61 14.28 13.48 14.3 13.25 14.18C13.02 14.07 12.28 13.83 11.41 13.05C10.73 12.44 10.27 11.69 10.14 11.47C10.01 11.24 10.13 11.11 10.24 11C10.35 10.89 10.48 10.72 10.6 10.59C10.71 10.45 10.76 10.35 10.83 10.2C10.91 10.05 10.87 9.92 10.81 9.8C10.76 9.69 10.3 8.56 10.11 8.11C9.92 7.67 9.73 7.73 9.58 7.72C9.44 7.71 9.28 7.71 9.12 7.71L9.04 7.67Z"/></svg>
            <span>${t.ctaLabel||"Let's talk about Aevis"}</span>
            <span aria-hidden="true" style="font-size: 11px;">↗</span>
          </a>
        `:`
          <a href="${s}" target="_blank" rel="noopener noreferrer" class="dash-cta-btn dash-cta-whatsapp">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.39C4.54 15.14 4.12 13.68 4.12 12.18C4.12 7.64 7.82 3.67 12.05 3.67M9.04 7.67C8.88 7.67 8.63 7.73 8.42 7.96C8.21 8.19 7.62 8.74 7.62 9.87C7.62 11 8.44 12.09 8.56 12.24C8.67 12.4 10.18 14.72 12.49 15.72C13.04 15.96 13.47 16.1 13.8 16.21C14.36 16.39 14.86 16.36 15.26 16.3C15.71 16.23 16.64 15.74 16.83 15.2C17.03 14.67 17.03 14.21 16.97 14.12C16.91 14.03 16.76 13.97 16.53 13.86C16.3 13.74 15.18 13.19 14.97 13.11C14.76 13.04 14.61 13 14.45 13.23C14.3 13.46 13.87 13.97 13.74 14.12C13.61 14.28 13.48 14.3 13.25 14.18C13.02 14.07 12.28 13.83 11.41 13.05C10.73 12.44 10.27 11.69 10.14 11.47C10.01 11.24 10.13 11.11 10.24 11C10.35 10.89 10.48 10.72 10.6 10.59C10.71 10.45 10.76 10.35 10.83 10.2C10.91 10.05 10.87 9.92 10.81 9.8C10.76 9.69 10.3 8.56 10.11 8.11C9.92 7.67 9.73 7.73 9.58 7.72C9.44 7.71 9.28 7.71 9.12 7.71L9.04 7.67Z"/></svg>
            <span>WhatsApp</span>
          </a>
          <a href="${i}" target="_blank" rel="noopener noreferrer" class="dash-cta-btn dash-cta-linkedin">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z"/></svg>
            <span>LinkedIn Profile</span>
          </a>
          ${t.externalHref?`
            <a href="${t.externalHref}" target="_blank" rel="noopener noreferrer" class="dash-cta-btn dash-cta-platform">
              <span>${t.externalLabel||"Launch Aevis Platform ↗"}</span>
            </a>
          `:""}
        `}
      </div>
    </div>
  `}function C(e){!m||!F[e]||(Pe.innerHTML=xe(e),m.showModal())}se&&m&&se.addEventListener("click",()=>m.close());m&&(m.addEventListener("click",e=>{e.target===m&&m.close()}),m.addEventListener("close",()=>{(location.pathname.includes("/case-studies/aeo-citation-growth")||location.pathname.includes("/case-studies/seo-organic-growth")||location.pathname.includes("/case-studies/paid-advertising"))&&history.replaceState(null,"","/")}));document.addEventListener("click",e=>{const t=e.target.closest("[data-strategy]");if(t){e.preventDefault();const a=t.dataset.strategy;a==="aeocase"?W():a==="seocase"?K():a==="paidmediacase"||a==="paidmedia"?_():C(a);return}});ie&&ie.addEventListener("click",()=>{C("aeo")});ne&&P&&ne.addEventListener("click",()=>{P.close()});P&&P.addEventListener("click",e=>{e.target===P&&P.close()});$.get("yb:boarded")==="1"&&sessionStorage.getItem("yb:entered")==="1"?(f.hidden=!0,E=!0,d.inert=!1,d.classList.remove("booting"),document.documentElement.classList.remove("is-covered"),I()):ce();const q={aeo:{year:"2025",platform:"AEO · GEO Strategy · AI Recommendation",restricted:!0},analytics:{year:"2025",platform:"AI Reporting · Analytics · GA4 Pipelines",restricted:!0},seo:{year:"2024",platform:"SEO · AEO Strategy · Organic Growth",restricted:!0},paidmedia:{year:"2023",platform:"Paid Advertising · Google & Meta Ads",restricted:!0},email:{year:"2023",platform:"Email Marketing · HubSpot · Lifecycle",restricted:!0},shopify:{year:"2024",platform:"Shopify · E-commerce CRO",restricted:!0},offers:{year:"2026",platform:"AI · Offers · Personalization",restricted:!0},akm:{year:"2026",platform:"AI · Knowledge intelligence",restricted:!0},pulse:{year:"2025",platform:"AI · Travel discovery",overview:"Emotion-aware, prompt-less AI travel recommender exploring discovery through emotional resonance rather than written queries.",heading:"Introducing a new way to explore",body:"Introduced The Pulse with Ramya Ravindran at Web Summit Qatar 2025 at the Qatar Airways booth, exploring the intersection of travel, emotion, and emerging tech.",image:"pulse",caption:"Dream Destination: The Pulse — Web Summit Qatar 2025"},sama:{year:"2025",platform:"AI · Customer experience",overview:"Showcasing Qatar Airways' next-gen AI cabin crew and conversational travel experiences at Web Summit Qatar 2025.",heading:"From ambitious idea to shared experience",body:"Part of the team demonstrating AI customer experiences at Web Summit Qatar, exchanging ideas with global tech leaders and collaborators.",image:"summit",caption:"Sharing Qatar Airways innovations at Web Summit Qatar 2025"},football:{year:"2026",platform:"iOS · Android · Loyalty",overview:"Privilege Club in-app quiz bringing members closer to the FIFA World Cup 2026™ with interactive trivia and rewards.",heading:"Building meaningful customer experiences",body:"Collaborated on sports, loyalty, and digital engagement features designed to maximize fan participation and member value.",image:"football",caption:"Qatar Airways Privilege Club — FIFA World Cup 2026™"}},M=["aeo","analytics","seo","paidmedia","email","shopify"],re=e=>({aeo:"AEO Strategy",analytics:"AI Analytics",seo:"AEO & SEO",paidmedia:"Paid Ads",email:"Email Marketing",shopify:"Shopify CRO",offers:"Offers",akm:"AKM",football:"World Cup",pulse:"The Pulse",sama:"Sama"})[e]||"Project";let ge=0;function z(e,t=!0){if(!q[e]||B[e]?.clickable===!1)return;d.hidden||(ge=scrollY),t&&history.pushState({project:e},"",`/work/${e}`);const a=B[e],s=q[e],i=M.indexOf(e),r=M[(i-1+M.length)%M.length],o=M[(i+1)%M.length];d.hidden=!0,n.hidden=!1,n.inert=!E,document.title=`${a.title} — Ismail Bettoumi`;const c=s.restricted?`<article class="cs-flow restricted-project"><div class="cs-col cs-reveal is-in"><header class="cs-header"><p class="cs-eyebrow">${s.year}<span class="cs-eyebrow-dot"></span>${s.platform}</p><h1 class="cs-title">${a.title}</h1><p class="cs-blurb">${a.desc}</p></header><section class="project-access" aria-labelledby="project-access-title"><span class="project-access-icon case-icon-${a.icon}" aria-hidden="true">${x[a.icon]}</span><p class="project-access-kicker">Selected project</p><h2 class="project-access-title" id="project-access-title">The details stay in the room.</h2><p class="project-access-copy">Contact Ismail for more details about this project.</p><a class="project-access-link" href="${b.linkedin}" target="_blank" rel="noopener noreferrer">Contact Ismail <span aria-hidden="true">↗</span></a></section></div></article>`:`<article class="cs-flow"><div class="cs-col cs-reveal is-in"><header class="cs-header"><p class="cs-eyebrow">${s.year}<span class="cs-eyebrow-dot"></span>${s.platform}</p><h1 class="cs-title">${a.title}</h1><p class="cs-blurb">${a.desc}</p></header><section class="cs-overview"><p class="cs-gutter-label">Overview</p><p class="cs-lede">${s.overview}</p></section></div><div class="cs-full cs-reveal is-in"><figure class="cs-figure is-wide project-figure"><button class="cs-figure-card" data-enlarge="${s.image}" aria-label="Enlarge ${a.title} image"><img src="${U(s.image)}" alt="${s.caption}"></button><figcaption class="cs-figcaption">${s.caption}</figcaption></figure></div><section class="cs-col cs-deep cs-reveal is-in"><h2 class="cs-heading">${s.heading}</h2><p class="cs-body">${s.body}</p><a class="project-source" href="${a.href}" target="_blank" rel="noopener noreferrer">Read my original post <span aria-hidden="true">↗</span></a></section></article>`;n.innerHTML=`${c}<div class="folio-footer-fx" aria-hidden="true"><div class="pb pb1"></div><div class="pb pb2"></div><div class="pb pb3"></div><div class="pb pb4"></div><div class="pb pb5"></div><div class="folio-footer-tint"></div></div><nav class="cs-nav" aria-label="Projects"><a class="cs-nav-btn is-back" href="/work/${r}" data-project="${r}"><span class="cs-nav-kicker">‹ Back</span><span class="cs-nav-name">${re(r)}</span></a><a class="cs-nav-home" href="/" data-home aria-label="Back to portfolio"><svg class="cs-nav-home-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 10 12 4l8 6v10h-6v-6h-4v6H4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg></a><a class="cs-nav-btn is-next" href="/work/${o}" data-project="${o}"><span class="cs-nav-kicker">Next ›</span><span class="cs-nav-name">${re(o)}</span></a></nav>`;const g=n.querySelector("[data-enlarge]");g&&(g.onclick=()=>{u.querySelector("img").src=U(s.image),u.querySelector("img").alt=s.caption,u.querySelector("p").textContent=s.caption,u.showModal()}),window.scrollTo(0,0),n.focus({preventScroll:!0})}function S(e=!0){e&&history.pushState(null,"","/"),n.hidden=!0,d.hidden=!1,document.title="Ismail Bettoumi — Digital Marketing",window.scrollTo(0,ge),I(),d.focus({preventScroll:!0})}function W(e=!0){n&&!n.hidden&&S(!1),e&&history.pushState({case:"aeo-citation-growth"},"","/case-studies/aeo-citation-growth/"),C("aeocase")}function K(e=!0){n&&!n.hidden&&S(!1),e&&history.pushState({case:"seo-organic-growth"},"","/case-studies/seo-organic-growth/"),C("seocase")}function _(e=!0){n&&!n.hidden&&S(!1),e&&history.pushState({case:"paid-media"},"","/case-studies/paid-advertising/"),C("paidmediacase")}document.addEventListener("click",e=>{const t=e.target.closest("[data-project],[data-home],[data-case],a[href*='/case-studies/aeo-citation-growth'],a[href*='/case-studies/seo-organic-growth'],a[href*='/case-studies/paid-advertising']");!t||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||(e.preventDefault(),t.hasAttribute("data-home")?S():t.dataset.case==="aeo-citation-growth"||t.getAttribute("href")?.includes("/case-studies/aeo-citation-growth")?W():t.dataset.case==="seo-organic-growth"||t.getAttribute("href")?.includes("/case-studies/seo-organic-growth")?K():t.dataset.case==="paid-media"||t.getAttribute("href")?.includes("/case-studies/paid-advertising")?_():t.dataset.project&&z(t.dataset.project))});window.addEventListener("popstate",()=>{if(location.pathname.includes("/case-studies/aeo-citation-growth"))n&&!n.hidden&&S(!1),C("aeocase");else if(location.pathname.includes("/case-studies/seo-organic-growth"))n&&!n.hidden&&S(!1),C("seocase");else if(location.pathname.includes("/case-studies/paid-advertising"))n&&!n.hidden&&S(!1),C("paidmediacase");else{m?.open&&m.close();const e=location.pathname.split("/")[2];q[e]?z(e,!1):S(!1)}});if(location.pathname.includes("/case-studies/aeo-citation-growth"))p(),W(!1);else if(location.pathname.includes("/case-studies/seo-organic-growth"))p(),K(!1);else if(location.pathname.includes("/case-studies/paid-advertising"))p(),_(!1);else{const e=location.pathname.split("/")[2];q[e]&&B[e]?.clickable!==!1&&(p(),z(e,!1))}oe(async()=>{const{mountSky:e}=await import("./sky-BRmYTtyO.js");return{mountSky:e}},__vite__mapDeps([2,1])).then(({mountSky:e})=>e(document.querySelector(".sky"),D)).catch(()=>{});
