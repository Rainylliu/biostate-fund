import Image from "next/image";
import InvestSidebar from "@/components/InvestSidebar";
import InvestorTestimonials from "@/components/InvestorTestimonials";
import PageTabs from "@/components/PageTabs";
import InvestorSayTab from "@/components/InvestorSayTab";
import Highlights from "@/components/Highlights";
import TeamSection from "@/components/TeamSection";
import InvestButton from "@/components/InvestButton";

/* ─── Section image: full-width image from Wefunder screenshots ─── */
function SectionImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="mb-8 rounded-xl overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={500}
        className="w-full h-auto"
        priority={false}
      />
    </div>
  );
}

/* ─── Highlight item ─── */
function Highlight({ num, text }: { num: number; text: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="highlight-num">{num}</div>
      <p className="text-base leading-relaxed">{text}</p>
    </div>
  );
}

/* ────────────────────────────── MAIN PAGE ────────────────────────────── */
export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ── Nav bar ── */}
      <nav className="flex items-center justify-between mb-8">
        <a href="https://www.biostate.ai/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/logo.png"
            alt="Biostate AI"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </a>
      </nav>

      {/* ── Hero title (full width, above two-column layout) ── */}
      <div className="mb-6">
        <p className="text-[18px] font-semibold text-[#475260] uppercase tracking-[0.1em] mb-4">
          BIOSTATE AI
        </p>
        <h1 className="text-[30px] font-bold leading-tight text-[#16263d]">
          Help 90% of people live to 90
        </h1>
      </div>

      {/* ── Two-column layout (starts at video level) ── */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* ── Left: Main content ── */}
        <div className="flex-1 min-w-0">
          {/* ── Hero ── */}
          <section className="mb-10">
            {/* Video - YouTube embed */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-black">
              <iframe
                src="https://www.youtube.com/embed/5GYiHju3-CU"
                title="Biostate AI Pitch"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Location & social links bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-[14px] text-gray-text">
                <span>biostate.ai</span>
                <span className="text-gray-300">|</span>
                <span>Houston, TX</span>
                <a href="https://www.linkedin.com/company/biostate-ai/" target="_blank" rel="noopener noreferrer" className="ml-2 text-[#8B97A7] hover:text-dark transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.youtube.com/@biostateai" target="_blank" rel="noopener noreferrer" className="text-[#8B97A7] hover:text-dark transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.instagram.com/biostate.ai/" target="_blank" rel="noopener noreferrer" className="text-[#8B97A7] hover:text-dark transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
              <div className="flex gap-2">
                {["Technology", "Healthcare", "SaaS", "AI"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-gray-100 rounded text-[10px] font-light text-gray-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider between video area and tabs */}
            <hr className="border-[#eff2f7] mb-6" />

            {/* Tabs + Tab Content */}
            <PageTabs
              overviewContent={<OverviewContent />}
              investorSayContent={<InvestorSayTab />}
            />
          </section>
        </div>

        {/* ── Right: Sticky Sidebar ── */}
        <div className="hidden lg:block w-[340px] flex-shrink-0">
          <InvestSidebar />
        </div>
      </div>

      {/* ── Mobile fixed bottom CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-border p-4 lg:hidden z-50">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div>
            <p className="font-bold text-lg">$505,100</p>
            <p className="text-xs text-gray-text">of $600,000 goal</p>
          </div>
          <InvestButton className="bg-brand text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-dark transition">
            INVEST
          </InvestButton>
        </div>
      </div>
    </main>
  );
}

/* ────────────────────────────── OVERVIEW TAB CONTENT ────────────────────────────── */
function OverviewContent() {
  return (
    <>
      {/* ── Highlights ── */}
      <Highlights />

      {/* ── Team (brief) ── */}
      <TeamSection />

      <hr className="border-gray-border mb-12" />

      {/* ── Why Biostate AI ── */}
      <section className="mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
          Help 90% of people live to 90
        </h2>
        <h3 className="text-[22px] font-bold mb-6">Why Biostate AI?</h3>
        <p className="text-[18px] leading-[1.8]">
          Today, pharma companies spend billions of dollars and multiple years
          to develop new drugs that benefit less than 20% of patients for each
          hyper-narrow disease. At Biostate, we believe that with the power of
          big data and modern AI, we can build a general purpose biomedical AI
          that can help 90% of humanity live to 90 years old by understanding
          and helping cure all diseases.
        </p>
      </section>

      {/* ── A Worldwide Clinical Network ── */}
      <section className="mb-14">
        <SectionImage
          src="/images/clinical-network.jpg"
          alt="A Worldwide Clinical Network - logos of 30+ partner hospitals and universities"
        />
        <p className="text-[17px] leading-[1.8]">
          Since its founding in 2023, Biostate has become a global
          constellation of organizations spanning 4 countries. We have
          established partnerships with dozens of leading hospitals including
          Harvard Medical School, MD Anderson Cancer Center, Cornell Weill
          Medical School, Peking Renmin Hospital (China), and Narayana Health
          (India).
        </p>
      </section>

      {/* ── 6 Diseases Focus ── */}
      <section className="mb-14">
        <SectionImage
          src="/images/diseases-focus.jpg"
          alt="6 Diseases Focus - Lung Cancer, Leukemia, Melanoma, Autoimmune Disease, Cardiovascular Disease, Diabetes"
        />
        <p className="text-[17px] leading-[1.8] mb-4">
          Through these collaborations, we can obtain real-world clinical data
          to train our predictive medical AI, N-act. Our active clinical
          research programs initially focus on leukemia, lung cancer,
          melanoma, diabetes, lupus, multiple sclerosis, and heart disease.
        </p>
        <p className="text-[17px] leading-[1.8]">
          The N-act model helps identify early warning patterns that standard
          tests often miss. These insights enable doctors to make earlier,
          better-informed decisions and ultimately improve care for millions of
          patients worldwide.
        </p>
      </section>

      {/* ── Top-Tier Investor Backing ── */}
      <section className="mb-14">
        <SectionImage
          src="/images/investor-backing.jpg"
          alt="Top-Tier Investor Backing - Series A Lead Investor Accel, with logos of Scale, Etsy, DJI, Dropbox, Discord, Fiverr, Facebook, Spotify, Slack"
        />
        <p className="text-[17px] leading-[1.8]">
          Biostate&apos;s Series A (2025) was led by Accel (Series A investors
          in Facebook, Scale AI, Slack, and Discord), and Biostate&apos;s
          earliest investors include Dario Amodei (co-founder/CEO of
          Anthropic), Emily Leproust (co-founder/CEO of Twist Bioscience),
          and the California Institute of Technology.
        </p>
      </section>

      {/* ── Built On Real Gains ── */}
      <section className="mb-14">
        <SectionImage
          src="/images/real-gains.jpg"
          alt="Built On Real Gains - Significant Growth, Exceptional Returns, +169% Investor Gain Since 2023"
        />
        <p className="text-[17px] leading-[1.8]">
          From its 2023 Seed round, Biostate&apos;s investors have seen up to
          +169% gain on the value of their investments. These top investors
          believe and support Biostate&apos;s vision of a future of healthy
          living &ndash; will you join them?
        </p>
      </section>

      {/* ── The World Is Losing Billions of Healthy Years ── */}
      <section className="mb-14">
        <h3 className="text-2xl font-bold mb-4">
          The World Is Losing Billions of Healthy Years
        </h3>
        <p className="text-[17px] leading-[1.8] mb-6">
          Today, the average global life expectancy is about 71 years (WHO).
          Most people lose nearly two decades of healthy life not because
          their diseases were incurable, but because doctor prescribe
          treatment for the &ldquo;average&rdquo; patient instead of
          specifically optimized for them. Precision medicine has the power to
          change this, but it is currently accessible to less than 5% of the
          world.
        </p>

        <SectionImage
          src="/images/healthy-years-lost.jpg"
          alt="20 Healthy Years Lost - The average global life expectancy is 71, bar chart showing healthy years vs disease years"
        />

        <p className="text-[17px] leading-[1.8] mb-6">
          If we can find a way to extend healthy lifespan to 90, the impact
          will be enormous: adding 19 extra healthy years to each of
          Earth&apos;s 8 billion people creates a combined 150 billion healthy
          years of life.
        </p>

        <SectionImage
          src="/images/qaly.jpg"
          alt="Each Quality-Adjusted Life Year (QALY) is worth $20,000-$100,000+"
        />

        <p className="text-[17px] font-bold mb-4">
          This is why our mission matters.
        </p>
        <p className="text-[17px] leading-[1.8]">
          Biostate has been working on the innovation of multiomics testing
          and advanced AI technologies to achieve this mission, and allowing
          your grandparents, your parents, and you to live longer and happier
          without battling the specter of disease.
        </p>
      </section>

      {/* ── Affordable Multiomics At Scale ── */}
      <section className="mb-14">
        <SectionImage
          src="/images/multiomics-scale.jpg"
          alt="Affordable Multiomics At Scale - Biostate's Sequencing Platform: less than $50 for 30,000 genes vs Traditional DNA/RNA Analysis: $3000+ for <500 genes"
        />
        <p className="text-[17px] leading-[1.8]">
          DNA and RNA sequencing technologies used today were invented in a
          different era and not intended to scale to millions of people.
          Genetic tests like Foundation One for cancer have a price tag of
          over $3000 to analyze 500 genes. We&apos;ve invented and deployed
          technology to do genetic analysis for less than $50, and on 30,000
          genes rather than 500. This uniquely allows us to scale data
          collection to millions of patient samples, with proper informed
          consent and physician support, in order to train powerful medical
          AI.
        </p>
      </section>

      {/* ── Ultra-Efficient RNAseq ── */}
      <section className="mb-14">
        <SectionImage
          src="/images/rnaseq.jpg"
          alt="Ultra-Efficient RNAseq - 10x Lower Cost, 10x Less Input, Any Sample"
        />
        <ul className="space-y-3 text-[17px] leading-[1.8] list-disc list-inside">
          <li>10&times; lower cost than traditional RNA sequencing</li>
          <li>
            10&times; less input required: one FFPE curl or 1 mL of plasma
            can uncover 30,000+ genes
          </li>
          <li>
            Works on damaged, degraded, or ultra-small samples that normally
            fail in standard pipelines
          </li>
        </ul>
      </section>

      {/* ── Ultra-Reliable DNAseq ── */}
      <section className="mb-14">
        <SectionImage
          src="/images/dnaseq.jpg"
          alt="Ultra-Reliable DNAseq - 8x Lower Cost, >95% Uniform Coverage, 260% GC-Rich Gain"
        />
        <ul className="space-y-3 text-[17px] leading-[1.8] list-disc list-inside">
          <li>
            8x lower cost than traditional DNA sequencing (Higher margin)
          </li>
          <li>
            &gt;95% uniform coverage at 30&times; depth, high diagnostic
            reliability
          </li>
          <li>
            260% improvement in notoriously difficult GC-rich regions
          </li>
        </ul>
      </section>

      {/* ── State-Of-The-Art Scientist AI ── */}
      <section className="mb-14">
        <SectionImage
          src="/images/k-dense-ai.jpg"
          alt="State-Of-The-Art Scientist AI - K-Dense, outperforming ChatGPT, Gemini, and Deepseek by 60%"
        />
        <p className="text-[17px] leading-[1.8] mb-4">
          Modern general-purpose AI models were not built to analyze
          terabytes of human molecular data. DNA or RNA sequencing data from
          a single person is usually 5000x larger than ChatGPT&apos;s working
          memory (100,000 words). That&apos;s why we built K-Dense &ndash; an
          autonomous AI scientist specializing in bio/medicine and
          outperforming ChatGPT, Gemini, and Deepseek by 60%.
        </p>
        <p className="text-[17px] leading-[1.8]">
          Working with Dr. David Sinclair, one of the world&apos;s leading
          aging researchers, K-Dense helped build the most accurate model for
          predicting biological age. In the process, K-Dense discovered four
          new RNA biomarkers of aging, uncovering biology that had never been
          documented before.
        </p>
      </section>

      {/* ── Go to Market ── */}
      <section className="mb-14">
        <h3 className="text-2xl font-bold mb-4">Go to Market</h3>
        <p className="text-[17px] font-semibold mb-2">
          Our pricing is simple.
        </p>
        <p className="text-[17px] leading-[1.8] mb-6">
          RNA tests cost $80 per sample. DNA tests cost $125 per sample.
          Gross margins are above 70%.
        </p>

        <SectionImage
          src="/images/market-10b.jpg"
          alt=">$10B/year - U.S. cancer diagnostic testing market, >70% gross margins"
        />

        <p className="text-[17px] leading-[1.8]">
          In the U.S. alone, cancer diagnostic testing represents a market of
          over $70B, with more than $25B per year coming from repeat tests,
          and this market continues to grow each year. This is only part of a
          larger opportunity across many additional disease areas where
          Biostate&apos;s technology can create substantial value.
        </p>
      </section>

      {/* ── A Global Footprint ── */}
      <section className="mb-14">
        <SectionImage
          src="/images/global-footprint.jpg"
          alt="A Global Footprint - China 1.4B, India 1.4B, Saudi Arabia 1.8B - Billions of Patients, One Integrated Platform"
        />
        <p className="text-[17px] leading-[1.8] mb-4">
          With operations across the United States, China, India, and the
          Middle East, Biostate operates inside the world&apos;s
          fastest-growing healthcare markets:
        </p>
        <ul className="space-y-3 text-[17px] leading-[1.8] list-disc list-inside">
          <li>
            <strong>China:</strong> 1.4B population; rapidly developing
            pharmaceutical industry building new drugs
          </li>
          <li>
            <strong>India:</strong> 1.4B population; world&apos;s greatest
            manufacturer of affordable generic and biosimilar drugs
          </li>
          <li>
            <strong>Saudi Arabia:</strong> Spiritual center of the 1.8B
            Muslim world with over 100 million worldwide pilgrims per year;
            strong government initiatives and incentives to modernize health
            through Vision 2030.
          </li>
        </ul>
        <p className="text-[17px] leading-[1.8] mt-4 font-semibold">
          No other precision-medicine company combines global wet labs, AI
          platforms, and multiomic pipelines across these regions like us.
        </p>
      </section>

      {/* ── Our Leadership Team ── */}
      <section className="mb-14">
        <SectionImage
          src="/images/leadership-team.jpg"
          alt="Our Leadership Team - David Zhang Ph.D. Co-Founder & CEO, Jeremy Sobotta CFO, and Senior Leadership"
        />
        <p className="text-[17px] leading-[1.8]">
          Our leadership team combines deep scientific expertise, proven
          company-building experience, and global operational leadership. Led
          by a repeat founder with a strong track record in molecular
          diagnostics and supported by seasoned financial and technical
          executives, the team brings together strengths across biotech, AI,
          and international markets&mdash;positioning Biostate.ai to execute
          at scale and translate cutting-edge science into real-world impact.
        </p>
      </section>

      {/* ── Guided By Global Experts ── */}
      <section className="mb-14">
        <SectionImage
          src="/images/global-experts.jpg"
          alt="Guided By Global Experts - Advisory board of world-class clinicians, researchers, and innovators"
        />
        <p className="text-[17px] leading-[1.8]">
          This advisory board brings together world-class clinicians,
          researchers, and innovators from leading institutions to guide and
          support Biostate.ai&apos;s mission. Backed by expertise across
          genomics, cancer, cardiovascular, autoimmune, and rare diseases,
          these advisors provide critical scientific, clinical, and strategic
          insight&mdash;ensuring our technology is credible, clinically
          relevant, and built to scale real-world impact.
        </p>
      </section>

      {/* ── Who's Building With Us ── */}
      <section className="mb-14">
        <SectionImage
          src="/images/investors-grid.jpg"
          alt="Who's Building With Us - Institutional Investors: Accel, Matter Venture Partners, Vision Plus Capital, Catapult VC, InfoEdge Ventures, Caltech Fund. Individual Investors: Prasad Chintamaneni, Dario Amodei, Mike Schnall-Levin, Emily Leproust, Joris Poort, Arpan Sheth"
        />
      </section>

      {/* ── Multi-Engine Revenue Growth ── */}
      <section className="mb-14">
        <h3 className="text-2xl font-bold mb-4">
          Multi-Engine Revenue Growth
        </h3>
        <p className="text-[17px] leading-[1.8] mb-6">
          Biostate AI is scaling through multiple high-margin growth engines:
          U.S. clinical diagnostics, proprietary AI software (K-Dense), and
          expansion across India, China, and the Middle East.
        </p>
      </section>

      {/* ── Financial Projections ── */}
      <section className="mb-14">
        <SectionImage
          src="/images/financial-projections.jpg"
          alt="Financial Projections (2026-2029) - Revenue projected to grow from $10.5M in 2026 to $180M by 2029"
        />
        <p className="text-[17px] leading-[1.8]">
          Revenue is projected to grow from $10.5M in 2026 to $180M by 2029,
          driven by repeat testing, AI licensing, and global market access.
          With gross margins above 70%, this growth supports strong operating
          leverage and long-term enterprise value.
        </p>
      </section>

      {/* ── What Investors Say ── */}
      <InvestorTestimonials />

      {/* ── CTA ── */}
      <section className="mb-14">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/invest-cta.jpg"
            alt="Invest Us - Be part of the next chapter of Biostate. Multiomics, AI, Global Impact"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="text-center mt-6">
          <InvestButton className="inline-block bg-brand text-white font-bold px-8 py-3 rounded-lg hover:bg-brand-dark transition">
            Invest Now
          </InvestButton>
        </div>
        <p className="text-lg font-bold mt-8 text-center">
          Join us in creating a future where precision medicine works for
          everyone.
        </p>
      </section>

      {/* ── Mascot ── */}
      <section className="mb-14">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/mascot-pio.png"
            alt="Meet our mascot PIO - A limited-edition plush gifted to Biostate.AI investors"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section className="text-xs text-gray-text leading-relaxed border-t border-gray-border pt-6">
        <p>
          Biostate AI is testing the waters to evaluate investor interest. No
          money or other consideration is being solicited; if sent, it will
          not be accepted. No offer to buy securities will be accepted. No
          part of the purchase price will be received until a Form C is filed
          and, then, only through Wefunder. Any indication of interest has no
          obligation or commitment of any kind.
        </p>
      </section>
    </>
  );
}
