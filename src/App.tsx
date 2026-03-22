import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Music, Star, Users, Award, ChevronRight } from 'lucide-react';

// --- Animations ---

const StringVibration = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg width="200%" height="100%" viewBox="0 0 2000 200" preserveAspectRatio="none">
        {[0, 1, 2, 3].map((i) => (
          <motion.path
            key={i}
            d={`M0,${100 + i * 15} C250,${70 + i * 15} 250,${130 + i * 15} 500,${100 + i * 15} C750,${70 + i * 15} 750,${130 + i * 15} 1000,${100 + i * 15} C1250,${70 + i * 15} 1250,${130 + i * 15} 1500,${100 + i * 15} C1750,${70 + i * 15} 1750,${130 + i * 15} 2000,${100 + i * 15}`}
            stroke="#C5A059"
            strokeWidth={1}
            fill="none"
            animate={{
              x: [-500, 0]
            }}
            transition={{
              duration: 4 + i * 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const FlowingMusic = () => {
  const musicSymbols = "𝄞 𝄢 𝄪 𝄆 𝄇 𝄈 𝄐 𝄑 𝄒 𝄓 𝄔 𝄕 𝄖 𝄗 𝄘 𝄙 𝄚 𝄛 𝄜 𝄝 ";
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] text-dark-brown select-none flex items-center whitespace-nowrap">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="text-[120px] md:text-[200px] font-serif tracking-[1em] px-4">
          {musicSymbols.repeat(5)}
        </div>
        <div className="text-[120px] md:text-[200px] font-serif tracking-[1em] px-4">
          {musicSymbols.repeat(5)}
        </div>
      </motion.div>
    </div>
  );
};

// --- Sections ---

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-brown">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/70 via-dark-brown/40 to-dark-brown z-10" />
        <img
          src="https://images.unsplash.com/photo-1460036521480-c4b50f6a6c11?q=80&w=2073&auto=format&fit=crop"
          alt="Violin close up"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="absolute inset-0 z-10">
        <StringVibration />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-champagne font-serif italic text-xl md:text-2xl mb-6 tracking-widest">Aria Strings</h2>
          <h1 className="text-ivory font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
            优雅小提琴<br />私享课
          </h1>
          <p className="text-ivory/80 font-sans text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto">
            聆听木与弦的私语，在匠心与艺术的交织中，开启您的专属古典音乐之旅。
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-champagne text-dark-brown px-10 py-4 rounded-full font-serif text-lg tracking-widest hover:bg-champagne-light transition-colors flex items-center gap-3 mx-auto shadow-xl shadow-champagne/10"
          >
            预约试听 <ChevronRight size={20} />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-champagne/50 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-serif text-sm tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-champagne/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="relative py-32 px-6 bg-ivory overflow-hidden">
      <FlowingMusic />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-champagne" />
              <span className="text-champagne font-serif tracking-widest uppercase text-sm">Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-brown leading-tight">
              匠心传承，<br />不止于技。
            </h2>
            <p className="text-medium-brown/80 font-sans text-lg leading-relaxed font-light">
              我们相信，每一次拉弓都是灵魂的倾诉。在这里，小提琴不仅是一件乐器，更是连接您与古典艺术的桥梁。我们的私享课程致力于在严谨的技巧训练与自由的艺术表达之间寻找完美的平衡。
            </p>
            <p className="text-medium-brown/80 font-sans text-lg leading-relaxed font-light">
              从握弓的姿态到揉弦的频率，每一个细节都由大师级导师为您量身打磨，让您在原木的共鸣中，找到属于自己的声音。
            </p>

            <div className="pt-6">
              <img src="https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=2070&auto=format&fit=crop" alt="Violin Wood Texture" className="w-32 h-32 object-cover rounded-full border-2 border-champagne/30 p-1" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-t-full overflow-hidden border border-champagne/20 p-2">
              <img
                src="https://images.unsplash.com/photo-1558556405-30712424afd1?q=80&w=2070&auto=format&fit=crop"
                alt="Focused Teaching"
                className="w-full h-full object-cover rounded-t-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-dark-brown text-ivory p-8 rounded-tr-3xl shadow-2xl">
              <p className="font-serif text-3xl text-champagne mb-2">15+</p>
              <p className="font-sans text-sm tracking-wider opacity-80">年教龄资深导师</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-champagne" strokeWidth={1.5} />,
      title: "大师级师资",
      desc: "源自顶尖音乐学院的演奏家亲自授课，传承纯正古典学派技法。"
    },
    {
      icon: <Music className="w-8 h-8 text-champagne" strokeWidth={1.5} />,
      title: "定制化教案",
      desc: "拒绝千篇一律，根据您的生理条件与音乐偏好，量身定制进阶路线。"
    },
    {
      icon: <Users className="w-8 h-8 text-champagne" strokeWidth={1.5} />,
      title: "沉浸式沙龙",
      desc: "定期举办内部雅集与室内乐重奏，在合奏中提升音乐素养与倾听能力。"
    },
    {
      icon: <Award className="w-8 h-8 text-champagne" strokeWidth={1.5} />,
      title: "国际化视野",
      desc: "对接国际考级与赛事资源，为有志于深造的学员提供专业指导。"
    }
  ];

  return (
    <section className="py-32 bg-dark-brown text-ivory relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-6">私享体验</h2>
          <p className="text-ivory/60 font-sans max-w-2xl mx-auto font-light">
            以匠心致敬艺术，为您提供无可挑剔的教学品质与服务。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group"
            >
              <div className="mb-6 p-4 rounded-full border border-champagne/20 inline-block bg-ivory/5 group-hover:bg-champagne/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-champagne mb-4">{feature.title}</h3>
              <p className="text-ivory/60 font-sans font-light leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section className="py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-champagne" />
              <span className="text-champagne font-serif tracking-widest uppercase text-sm">Moments</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-brown">艺术瞬间</h2>
          </div>
          <p className="text-medium-brown/60 font-sans max-w-md font-light text-sm md:text-base">
            记录每一次弓弦交错的感动，见证技艺与情感的升华。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="md:col-span-2 aspect-[16/9] overflow-hidden rounded-sm relative group"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1541041763802-22e54bc11c6c?q=80&w=2070&auto=format&fit=crop" alt="Performance" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-dark-brown/20 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>

          <motion.div
            className="aspect-square md:aspect-auto overflow-hidden rounded-sm relative group"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=2070&auto=format&fit=crop" alt="Detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-dark-brown/20 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="relative py-32 bg-dark-brown text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1460036521480-c4b50f6a6c11?q=80&w=2073&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Music className="w-12 h-12 text-champagne mx-auto mb-8 opacity-50" />
        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
          准备好奏响您的<br />第一乐章了吗？
        </h2>
        <p className="text-ivory/70 font-sans text-lg mb-12 font-light">
          留下您的联系方式，我们的艺术顾问将为您安排专属的试听体验。
        </p>

        <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="您的称呼"
            className="w-full bg-ivory/5 border border-champagne/30 rounded-none px-6 py-4 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-champagne transition-colors font-sans font-light"
          />
          <input
            type="tel"
            placeholder="联系电话"
            className="w-full bg-ivory/5 border border-champagne/30 rounded-none px-6 py-4 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-champagne transition-colors font-sans font-light"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-champagne text-dark-brown px-6 py-4 font-serif text-lg tracking-widest hover:bg-champagne-light transition-colors mt-4"
          >
            立即预约
          </motion.button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#110B07] text-ivory/40 py-12 px-6 border-t border-champagne/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif italic text-xl text-champagne/80 tracking-widest">
          Aria Strings
        </div>
        <div className="flex gap-8 font-sans text-sm font-light">
          <a href="#" className="hover:text-champagne transition-colors">关于我们</a>
          <a href="#" className="hover:text-champagne transition-colors">课程体系</a>
          <a href="#" className="hover:text-champagne transition-colors">师资力量</a>
          <a href="#" className="hover:text-champagne transition-colors">联系方式</a>
        </div>
        <div className="font-sans text-xs font-light">
          &copy; 2026 Aria Strings. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans bg-ivory text-dark-brown min-h-screen selection:bg-champagne selection:text-dark-brown">
      <Hero />
      <Philosophy />
      <Features />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}
