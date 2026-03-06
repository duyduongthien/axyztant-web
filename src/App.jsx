import React, { useState } from 'react';
import { 
  Brain, Globe, ShieldCheck, Zap, Rocket, Users, 
  Code, Layers, Cpu, MapPin, Mail, Phone, ChevronRight,
  Database, Activity, MonitorSmartphone, Server, Briefcase
} from 'lucide-react';

const translations = {
  en: {
    nav: { about: "About", aiEdge: "AI Edge", services: "Services", portfolio: "Portfolio", team: "Team", contact: "Contact Us" },
    slogan: "Assist by Intelligence",
    hero: {
      badge: "Premium Software Engineering & Digital Transformation",
      title1: "Empower People Through",
      title2: "Intelligent Solutions",
      desc: "We walk alongside organizations as a trusted tech partner, leveraging cutting-edge AI, Blockchain, and Enterprise ERP to co-create transformative digital landscapes.",
      btn1: "Explore Services",
      btn2: "Our Works"
    },
    stats: {
      title: "Built for Global Scale. Engineered with Precision.",
      p1: "Axyztant is a premier software engineering consulting firm based in Vietnam. Powered by a core team of 30+ world-class engineers, we possess the robust agility to rapidly scale up to 100+ professionals.",
      p2: "We specialize in highly scalable ERP systems, cutting-edge Blockchain architectures, secure FinTech solutions, and Applied Artificial Intelligence.",
      l1: "Projects Delivered", l2: "Enterprise Clients", l3: "Client Retention", l4: "Continents Reached"
    },
    ai: {
      badge: "Competitive Edge", title: "The Power of AI in Development",
      desc: "Pioneering the application of Artificial Intelligence into the SDLC, we commit to delivering high-performance enterprise solutions with optimized resources and precision.",
      c1Title: "Operational Efficiency", c1Desc: "Automating repetitive tasks in coding, infrastructure provisioning, and testing processes, reducing operational overhead by up to 30%.",
      c2Title: "Accelerated Delivery", c2Desc: "Integrating AI-assisted engineering tools accelerates development cycles, bringing mission-critical products to market significantly faster.",
      c3Title: "Uncompromised Quality", c3Desc: "AI-driven Code Reviews and Automated QA Testing detect vulnerabilities proactively and ensure adherence to elite global coding standards."
    },
    services: {
      badge: "What We Do", title: "Comprehensive Enterprise-Grade Services",
      tab1: "Services", tab2: "Domains",
      s1: "Enterprise ERP & DX", s1d: "End-to-end consulting, development, and modernization of core ERP systems to streamline complex operations.",
      s2: "Blockchain, Web3 & FinTech", s2d: "Architecting secure, decentralized ecosystems—from DeFi platforms to cryptographic wallets.",
      s3: "Applied AI & Data Eng.", s3d: "Deploying advanced AI models (Agentic AI & LLMs) to automate workflows and augment decision-making.",
      s4: "Bespoke Software", s4d: "Engineering highly scalable web platforms and customized mobile applications for unique corporate challenges.",
      s5: "Cloud & DevOps", s5d: "Modernizing legacy systems with cloud-native architectures, Kubernetes, and automated CI/CD pipelines.",
      s6: "Offshore Dev Center", s6d: "Elite, ready-to-scale dedicated teams of engineers integrating seamlessly into your internal operations.",
      d1: "Corporate & Financial", d1_1: "Enterprise Management", d1_2: "Finance & Banking", d1_3: "Retail & E-commerce",
      d2: "Operations & Infra", d2_1: "Logistics & Supply Chain", d2_2: "Manufacturing & Industry 4.0", d2_3: "Real Estate (PropTech)",
      d3: "Specialized Domains", d3_1: "Healthcare & Life Sciences", d3_2: "Education (EdTech)", d3_3: "GreenTech & ESG"
    },
    models: {
      badge: "Engagement", title: "Strategic Collaboration Models",
      m1Title: "Project-Based Delivery", m1Sub: "Fixed Scope", m1Desc: "Ideal for clearly defined enterprise initiatives or MVP launches. We assume full ownership of the end-to-end delivery lifecycle.",
      m2Title: "Agile Co-Development", m2Sub: "Time & Materials", m2Desc: "Designed for dynamic, innovation-driven projects with evolving scopes like complex AI integrations or Web3 ecosystems.",
      m3Title: "Dedicated Eng. Hub", m3Sub: "ODC", m3Desc: "A strategic extension of your in-house capabilities. Elite, dedicated teams that assimilate entirely into your corporate culture."
    },
    portfolio: {
      badge: "Our Works", title: "Featured Portfolio",
      p1Desc: "Privacy-preserving credit scoring model utilizing AI to analyze multi-dimensional data, ensuring user data sovereignty while eliminating bias.",
      p2Desc: "Digital transformation of the core ERP for thousands of employees, streamlining massive internal workflows and optimizing efficiency.",
      p3Desc: "Highly secure, anti-manipulation decentralized exchange (DEX) on Polygon network featuring advanced wallet integration.",
      p4Desc: "Innovative AI-powered educational app delivering highly personalized learning experiences, scaled robustly across the African continent."
    },
    team: {
      badge: "Leadership", title: "Meet Our Team",
      t1Desc: "15+ years experience driving enterprise digital transformation and complex ERP implementations. Expert in scaling high-performance teams via Agile, SAFe & CMMI.",
      t2Desc: "Ph.D. in Statistics (Trinity College Dublin). Former researcher at Huawei & Zalo. Expert in data science, statistical modeling, and integrating cutting-edge AI.",
      t3Desc: "Product Leader with deep expertise in AI agentic workflows. Former Senior Product Owner at FPT, driving cutting-edge AI solutions from greenfield development to brownfield optimization with sharp business acumen.",
      t4Desc: "Expert in architecting scalable AI systems and solving complex enterprise data challenges. Former Technical Lead at Viettel, mastering high-frequency integrations and autonomous agentic workflows.",
      t5Desc: "Expert in architecting and managing high-scale infrastructures. Former engineer at Vietcombank, mastering DevOps, cloud operations, and ensuring high availability for enterprise systems.",
      t6Desc: "Proven leadership in UX/UI and Frontend engineering for enterprise and Web3 platforms. Former Tech Lead at VNPT Media, mastering scalable, user-centric digital experiences."
    },
    footer: {
      loc: "Locations (Vietnam)", comp: "Company",
      desc: "Driven to assist by intelligence, we walk alongside organizations to co-create transformative solutions that empower people."
    }
  },
  vi: {
    nav: { about: "Giới thiệu", aiEdge: "Năng lực AI", services: "Dịch vụ", portfolio: "Dự án", team: "Ban Lãnh đạo", contact: "Liên hệ" },
    slogan: "Đồng hành bằng trí tuệ",
    hero: {
      badge: "Giải pháp Công nghệ & Chuyển đổi số Toàn diện",
      title1: "Kiến tạo Tương lai với",
      title2: "Giải pháp Trí tuệ",
      desc: "Là đối tác công nghệ tin cậy, chúng tôi ứng dụng các công nghệ lõi như AI, Blockchain và hệ thống ERP để kiến tạo hệ sinh thái số, tối ưu hóa năng lực vận hành cho doanh nghiệp.",
      btn1: "Khám phá Dịch vụ",
      btn2: "Dự án Tiêu biểu"
    },
    stats: {
      title: "Năng lực Toàn cầu. Chất lượng Vượt trội.",
      p1: "Axyztant là đơn vị tư vấn và phát triển phần mềm hàng đầu tại Việt Nam. Với đội ngũ chuyên gia công nghệ chuẩn quốc tế, chúng tôi có khả năng linh hoạt mở rộng quy mô dự án lên đến hàng trăm kỹ sư.",
      p2: "Thế mạnh cốt lõi của chúng tôi nằm ở việc triển khai các hệ thống quản trị (ERP), kiến trúc Blockchain tiên tiến, giải pháp FinTech bảo mật và tích hợp Trí tuệ nhân tạo (AI) vào thực tiễn.",
      l1: "Dự án Hoàn thành", l2: "Khách hàng Doanh nghiệp", l3: "Tỷ lệ Hài lòng", l4: "Châu lục Tiếp cận"
    },
    ai: {
      badge: "Năng lực Cốt lõi", title: "Đột phá Hiệu suất với Trí tuệ Nhân tạo",
      desc: "Tiên phong tích hợp AI vào Vòng đời phát triển phần mềm (SDLC), chúng tôi cam kết mang lại các giải pháp có độ hoàn thiện cao, tối ưu hóa chi phí và đảm bảo tiến độ triển khai thần tốc.",
      c1Title: "Tối ưu Vận hành", c1Desc: "Tự động hóa các tác vụ lặp lại trong lập trình, thiết lập hạ tầng và kiểm thử, giúp doanh nghiệp cắt giảm đến 30% chi phí vận hành.",
      c2Title: "Tăng tốc Triển khai", c2Desc: "Tích hợp các công cụ lập trình AI giúp rút ngắn chu kỳ phát triển, nhanh chóng đưa các sản phẩm trọng yếu ra thị trường.",
      c3Title: "Chất lượng Tuyệt đối", c3Desc: "Ứng dụng AI trong đánh giá mã nguồn và kiểm thử tự động giúp chủ động phát hiện lỗ hổng, đảm bảo tuân thủ các tiêu chuẩn bảo mật toàn cầu."
    },
    services: {
      badge: "Lĩnh vực Hoạt động", title: "Dịch vụ Công nghệ Toàn diện",
      tab1: "Dịch vụ", tab2: "Ngành nghề",
      s1: "ERP & Chuyển đổi số", s1d: "Tư vấn và triển khai hệ thống quản trị doanh nghiệp (ERP) toàn diện, giúp chuẩn hóa và tối ưu quy trình vận hành.",
      s2: "Blockchain & FinTech", s2d: "Xây dựng hệ sinh thái phi tập trung bảo mật cao—từ nền tảng Tài chính (DeFi) đến ví lưu trữ tài sản số.",
      s3: "AI & Khai thác Dữ liệu", s3d: "Triển khai các mô hình AI tiên tiến (LLMs, Agentic AI) nhằm tự động hóa quy trình và hỗ trợ ra quyết định từ dữ liệu.",
      s4: "Phát triển Phần mềm", s4d: "Thiết kế và phát triển các nền tảng web, ứng dụng di động may đo với khả năng mở rộng linh hoạt.",
      s5: "Cloud & DevOps", s5d: "Hiện đại hóa hạ tầng với kiến trúc cloud-native, Kubernetes và thiết lập quy trình tích hợp/phân phối tự động (CI/CD).",
      s6: "Trung tâm ODC", s6d: "Cung cấp đội ngũ kỹ sư tinh nhuệ, sẵn sàng mở rộng và tích hợp liền mạch vào bộ máy vận hành của doanh nghiệp.",
      d1: "Tài chính & Doanh nghiệp", d1_1: "Quản trị Doanh nghiệp", d1_2: "Tài chính & Ngân hàng", d1_3: "Bán lẻ & E-commerce",
      d2: "Vận hành & Hạ tầng", d2_1: "Logistics & Chuỗi cung ứng", d2_2: "Sản xuất & Công nghiệp 4.0", d2_3: "Bất động sản (PropTech)",
      d3: "Lĩnh vực Chuyên sâu", d3_1: "Y tế & Khoa học", d3_2: "Giáo dục (EdTech)", d3_3: "Công nghệ Xanh & ESG"
    },
    models: {
      badge: "Hình thức Hợp tác", title: "Mô hình Hợp tác Chiến lược",
      m1Title: "Triển khai Trọn gói", m1Sub: "Phạm vi cố định", m1Desc: "Giải pháp tối ưu cho các dự án đã rõ yêu cầu hoặc xây dựng MVP. Chúng tôi cam kết chịu trách nhiệm toàn bộ vòng đời phát triển dự án.",
      m2Title: "Hợp tác Phát triển", m2Sub: "Time & Materials", m2Desc: "Phù hợp với các dự án đổi mới sáng tạo, yêu cầu thay đổi liên tục như tích hợp AI phức tạp hoặc hệ sinh thái Web3.",
      m3Title: "Đội ngũ Chuyên trách", m3Sub: "Mô hình ODC", m3Desc: "Giải pháp mở rộng năng lực công nghệ dài hạn. Đội ngũ kỹ sư sẽ tích hợp hoàn toàn vào quy trình và văn hóa của doanh nghiệp bạn."
    },
    portfolio: {
      badge: "Dự án Nổi bật", title: "Dự án Tiêu biểu",
      p1Desc: "Mô hình chấm điểm tín dụng bảo mật sử dụng AI để phân tích dữ liệu đa chiều, đảm bảo chủ quyền dữ liệu người dùng và loại bỏ định kiến.",
      p2Desc: "Chuyển đổi số hệ thống ERP lõi cho hàng ngàn nhân viên, tối ưu hóa quy trình làm việc nội bộ và nâng cao năng suất.",
      p3Desc: "Sàn giao dịch phi tập trung (DEX) bảo mật cao, chống thao túng trên mạng lưới Polygon với tích hợp ví điện tử nâng cao.",
      p4Desc: "Ứng dụng giáo dục tích hợp AI sáng tạo, mang đến trải nghiệm học tập cá nhân hóa, mở rộng mạnh mẽ khắp lục địa Châu Phi."
    },
    team: {
      badge: "Ban Lãnh đạo", title: "Đội ngũ Chuyên gia",
      t1Desc: "Hơn 15 năm kinh nghiệm dẫn dắt chuyển đổi số và triển khai ERP phức tạp. Chuyên gia xây dựng đội ngũ kỹ thuật thông qua Agile, SAFe & CMMI.",
      t2Desc: "Tiến sĩ Thống kê (Trinity College Dublin). Cựu nghiên cứu viên Huawei & Zalo. Chuyên gia Khoa học Dữ liệu và Tích hợp AI.",
      t3Desc: "Chuyên gia phát triển sản phẩm với chuyên môn sâu về luồng tác vụ AI tự trị (Agentic workflows). Cựu Senior Product Owner tại FPT, nhạy bén trong thiết kế và tối ưu hóa giải pháp AI từ giai đoạn xây dựng mới đến nâng cấp hệ thống.",
      t4Desc: "Chuyên gia kiến trúc hệ thống AI và xử lý dữ liệu lớn. Từng đảm nhiệm vị trí Tech Lead tại Viettel, sở hữu chuyên môn sâu rộng về tích hợp hệ thống tần suất cao và thiết kế luồng tác vụ AI tự trị (Agentic workflows).",
      t5Desc: "Chuyên gia thiết kế và vận hành hạ tầng công nghệ quy mô lớn. Từng công tác tại Vietcombank, với thế mạnh cốt lõi về DevOps, điện toán đám mây và đảm bảo độ ổn định tuyệt đối cho các hệ thống trọng yếu.",
      t6Desc: "Chuyên gia UX/UI và Frontend với nhiều năm dẫn dắt các dự án Enterprise và Web3. Từng là Tech Lead tại VNPT Media, am hiểu sâu sắc việc tối ưu hóa và thiết kế trải nghiệm số lấy người dùng làm trung tâm."
    },
    footer: {
      loc: "Văn phòng (Việt Nam)", comp: "Công ty",
      desc: "Với sứ mệnh đồng hành bằng trí tuệ, chúng tôi sát cánh cùng các tổ chức kiến tạo nên những giải pháp công nghệ mang lại giá trị bền vững cho con người."
    }
  },
  ja: {
    nav: { about: "会社概要", aiEdge: "AIの強み", services: "事業概要", portfolio: "開発実績", team: "経営陣", contact: "お問い合わせ" },
    slogan: "知性で寄り添う、確かな力",
    hero: {
      badge: "最先端ソフトウェア開発 ＆ DXコンサルティング",
      title1: "インテリジェンスが導く",
      title2: "真のトランスフォーメーション",
      desc: "お客様の真のテクノロジーパートナーとして、最先端のAI、ブロックチェーン、そしてエンタープライズERPを駆使し、ビジネスを次なる次元へと引き上げるデジタルエコシステムを共創します。",
      btn1: "サービス詳細",
      btn2: "開発実績"
    },
    stats: {
      title: "グローバル品質。圧倒的な技術力。",
      p1: "Axyztantは、ベトナム発の気鋭のITコンサルティング＆ソフトウェア開発ファームです。グローバル水準のトップエンジニア30名以上をコアメンバーとし、プロジェクトの規模に応じて100名体制へと迅速にスケール可能なアジリティを備えています。",
      p2: "大規模エンタープライズERP、最先端のブロックチェーン/Web3基盤、堅牢なFinTechシステム、そしてAI（人工知能）のビジネス実装において、比類なき専門性を発揮します。",
      l1: "プロジェクト完遂数", l2: "エンタープライズ顧客", l3: "顧客リピート率", l4: "展開グローバル拠点（大陸）"
    },
    ai: {
      badge: "コア・コンピタンス", title: "AIがもたらす開発パラダイムの変革",
      desc: "ソフトウェア開発ライフサイクル（SDLC）全般にAIを先駆的に組み込むことで、リソース配分と開発精度を極限まで最適化。妥協のない高品質なエンタープライズソリューションを提供します。",
      c1Title: "圧倒的な運用効率", c1Desc: "コーディング、インフラ構築、テスト工程における反復タスクを自動化し、開発・運用コストを最大30%削減します。",
      c2Title: "超高速なデリバリー", c2Desc: "AI支援エンジニアリングツールを統合することで開発サイクルを劇的に加速。ミッションクリティカルな製品の市場投入（Time-to-Market）を早めます。",
      c3Title: "最高水準の品質保証", c3Desc: "AI主導のコードレビューと自動化されたQAテストにより、脆弱性をプロアクティブに検出し、世界最高水準のセキュアなコーディング基準を担保します。"
    },
    services: {
      badge: "提供価値", title: "企業の課題を解決する包括的ITソリューション",
      tab1: "サービス", tab2: "対象ドメイン",
      s1: "ERP ＆ DX推進", s1d: "複雑な業務プロセスを最適化するコアERPシステムの導入コンサルティングから開発、レガシー刷新までをエンドツーエンドで支援。",
      s2: "ブロックチェーン ＆ Web3", s2d: "DeFiプラットフォームから暗号資産ウォレットまで、堅牢で耐改ざん性の高い分散型エコシステムを構築。",
      s3: "応用AI ＆ データ解析", s3d: "高度なAIモデル（Agentic AIやLLM）を実装し、業務ワークフローの自動化とデータ駆動型の意思決定を実現。",
      s4: "フルスクラッチ開発", s4d: "お客様独自のビジネス課題を解決するための、拡張性の高いWebプラットフォームやモバイルアプリをゼロから構築。",
      s5: "クラウド ＆ DevOps", s5d: "クラウドネイティブアーキテクチャ、Kubernetes、CI/CDパイプラインの自動化によるレガシーシステムの近代化。",
      s6: "ラボ型開発（ODC）", s6d: "お客様の社内チームとシームレスに連携し、プロジェクトの成功にコミットする即戦力の専任エンジニアリングチームをご提供。",
      d1: "エンタープライズ ＆ 金融", d1_1: "経営管理（ERP）", d1_2: "金融・銀行システム", d1_3: "小売・Eコマース",
      d2: "業務基盤 ＆ オペレーション", d2_1: "物流・サプライチェーン", d2_2: "製造業・インダストリー4.0", d2_3: "不動産テック（PropTech）",
      d3: "特化型ドメイン", d3_1: "ヘルスケア・ライフサイエンス", d3_2: "教育テクノロジー（EdTech）", d3_3: "環境テック・ESG領域"
    },
    models: {
      badge: "契約形態", title: "ビジネス要件に合わせた開発モデル",
      m1Title: "請負型開発", m1Sub: "Fixed Scope（スコープ固定）", m1Desc: "要件が明確な基幹システム開発やMVP開発に最適。設計から納品までのライフサイクル全体に責任を持ち、確実なアウトプットを保証します。",
      m2Title: "アジャイル・共創型開発", m2Sub: "Time & Materials（準委任）", m2Desc: "複雑なAI統合やWeb3プロジェクトなど、仕様変更が前提となる革新的なプロジェクトに最適。柔軟にピボットしながら開発を進めます。",
      m3Title: "ラボ型開発 (ODC)", m3Sub: "Dedicated Team（専任チーム）", m3Desc: "中長期的な開発体制の構築に最適。お客様の企業文化と技術標準を深く理解した、ベトナムのエリートエンジニアチームをご用意します。"
    },
    portfolio: {
      badge: "主要実績", title: "最新のプロジェクト事例",
      p1Desc: "AIを活用して多次元データを解析する、プライバシー保護型の信用スコアリング基盤。データの主権をユーザーに返しつつ、審査バイアスを排除。",
      p2Desc: "数千人規模の従業員が利用するコアERPシステムのデジタルトランスフォーメーション。複雑な社内ワークフローを合理化し、業務効率を劇的に向上。",
      p3Desc: "Polygonネットワーク上に構築された、高度なセキュリティとウォレット統合機能を備える分散型取引所（DEX）。",
      p4Desc: "AIによるパーソナライズされた学習体験を提供する革新的なEdTechアプリ。アフリカ大陸の学生向けにスケーラブルなクラウド基盤で展開。"
    },
    team: {
      badge: "リーダーシップ", title: "経営陣・エキスパート",
      t1Desc: "エンタープライズDXと複雑なERP導入において15年以上の経験を持つ。Agile、SAFe、CMMI基準を用いた大規模開発チームのマネジメントを牽引。",
      t2Desc: "アイルランド・トリニティカレッジ統計学博士。元Huawei、Zalo研究員。データサイエンスと最先端AIのエンタープライズ実装における世界的スペシャリスト。",
      t3Desc: "AIエージェントワークフローに精通するプロダクトリーダー。FPTの元シニアPOとして、新規構築から既存最適化まで、鋭いビジネスセンスで最先端のAIソリューションを牽引。",
      t4Desc: "大規模AIシステムアーキテクチャおよび複雑なデータ解析の専門家。Viettelでのテックリード経験を持ち、高頻度システム統合や自律型AIワークフロー設計に深い知見を持つ。",
      t5Desc: "大規模インフラストラクチャ設計・運用のスペシャリスト。Vietcombankでの経験を活かし、DevOps、クラウドアーキテクチャ、ミッションクリティカルなシステムの高可用性（HA）担保を強みとする。",
      t6Desc: "エンタープライズおよびWeb3向けUX/UI・フロントエンド開発のエキスパート。VNPT Mediaでのテックリード経験を持ち、スケーラブルでユーザー中心のデジタル体験設計に精通。"
    },
    footer: {
      loc: "拠点（ベトナム）", comp: "会社情報",
      desc: "「知性で寄り添う」という理念のもと、私たちは技術の力で人々の可能性を広げ、持続可能な未来を共創するテクノロジーパートナーです。"
    }
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('services');
  const [lang, setLang] = useState('en');
  
  const t = translations[lang];
  const CDN_BASE = "https://cdn.axyztant.com/images";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 scroll-smooth">
      {/* HEADER */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* LOGO AREA */}
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={`${CDN_BASE}/logo.jpg`} 
                  alt="Axyztant Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%23007acc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z'/%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-[#007acc]">AXYZTANT</h1>
                <p className="text-[10px] sm:text-xs font-bold text-[#007acc]/80 tracking-widest uppercase">{t.slogan}</p>
              </div>
            </a>
            
            <div className="hidden lg:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#about" className="hover:text-[#007acc] transition-colors">{t.nav.about}</a>
              <a href="#ai-edge" className="hover:text-[#007acc] transition-colors">{t.nav.aiEdge}</a>
              <a href="#services" className="hover:text-[#007acc] transition-colors">{t.nav.services}</a>
              <a href="#portfolio" className="hover:text-[#007acc] transition-colors">{t.nav.portfolio}</a>
              <a href="#team" className="hover:text-[#007acc] transition-colors">{t.nav.team}</a>
            </div>
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200">
                <button onClick={() => setLang('en')} className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold transition-all ${lang === 'en' ? 'bg-white text-[#007acc] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>EN</button>
                <button onClick={() => setLang('vi')} className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold transition-all ${lang === 'vi' ? 'bg-white text-[#007acc] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>VI</button>
                <button onClick={() => setLang('ja')} className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold transition-all ${lang === 'ja' ? 'bg-white text-[#007acc] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>JP</button>
              </div>
              <div className="hidden md:block">
                <a href="#contact" className="bg-[#007acc] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#005c99] transition-all shadow-md shadow-[#007acc]/20">
                  {t.nav.contact}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#007acc]/5 via-white to-cyan-50 overflow-hidden pt-16 pb-24 lg:pt-20 lg:pb-32 border-b border-slate-100">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#007acc]/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl flex flex-col items-center">
            <div className="inline-flex items-center space-x-2 bg-[#007acc]/10 border border-[#007acc]/20 rounded-full px-4 py-1.5 mb-8 text-[#007acc] text-sm font-bold">
              <img 
                src={`${CDN_BASE}/logo.jpg`} 
                alt="Axyztant Mini Logo" 
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span>{t.hero.badge}</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6 text-slate-900">
              {t.hero.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007acc] to-cyan-500">{t.hero.title2}</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              {t.hero.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#services" className="bg-[#007acc] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#005c99] transition-colors flex items-center shadow-lg shadow-[#007acc]/30">
                {t.hero.btn1} <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#portfolio" className="bg-white text-slate-800 border border-slate-300 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-colors flex items-center shadow-sm">
                {t.hero.btn2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS & OVERVIEW */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight whitespace-pre-line">
                {t.stats.title.replace('. ', '.\n')}
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {t.stats.p1}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                {t.stats.p2}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard value="50+" label={t.stats.l1} icon={<Briefcase />} />
              <StatCard value="20+" label={t.stats.l2} icon={<Globe />} />
              <StatCard value="95%" label={t.stats.l3} icon={<Activity />} />
              <StatCard value="5" label={t.stats.l4} icon={<MapPin />} />
            </div>
          </div>
        </div>
      </section>

      {/* THE POWER OF AI */}
      <section id="ai-edge" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#007acc] uppercase mb-3">{t.ai.badge}</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">{t.ai.title}</h3>
            <p className="text-lg text-slate-600">
              {t.ai.desc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Cpu className="w-8 h-8 text-[#007acc]" />}
              title={t.ai.c1Title}
              desc={t.ai.c1Desc}
            />
            <FeatureCard 
              icon={<Rocket className="w-8 h-8 text-cyan-500" />}
              title={t.ai.c2Title}
              desc={t.ai.c2Desc}
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-indigo-500" />}
              title={t.ai.c3Title}
              desc={t.ai.c3Desc}
            />
          </div>
        </div>
      </section>

      {/* SERVICES & DOMAINS */}
      <section id="services" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-[#007acc] uppercase mb-3">{t.services.badge}</h2>
              <h3 className="text-4xl font-black text-slate-900">{t.services.title}</h3>
            </div>
            <div className="flex space-x-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button onClick={() => setActiveTab('services')} className={`px-6 py-2 rounded-md font-bold transition-all ${activeTab === 'services' ? 'bg-[#007acc] text-white shadow-sm' : 'text-slate-600 hover:text-[#007acc]'}`}>{t.services.tab1}</button>
              <button onClick={() => setActiveTab('domains')} className={`px-6 py-2 rounded-md font-bold transition-all ${activeTab === 'domains' ? 'bg-[#007acc] text-white shadow-sm' : 'text-slate-600 hover:text-[#007acc]'}`}>{t.services.tab2}</button>
            </div>
          </div>

          {activeTab === 'services' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard icon={<Database />} title={t.services.s1} desc={t.services.s1d} />
              <ServiceCard icon={<Layers />} title={t.services.s2} desc={t.services.s2d} />
              <ServiceCard icon={<Brain />} title={t.services.s3} desc={t.services.s3d} />
              <ServiceCard icon={<MonitorSmartphone />} title={t.services.s4} desc={t.services.s4d} />
              <ServiceCard icon={<Server />} title={t.services.s5} desc={t.services.s5d} />
              <ServiceCard icon={<Users />} title={t.services.s6} desc={t.services.s6d} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#007acc]/5 border border-[#007acc]/20 p-8 rounded-2xl hover:shadow-md transition-all">
                <h4 className="text-xl font-bold mb-4 flex items-center text-slate-900"><Briefcase className="mr-3 text-[#007acc]" /> {t.services.d1}</h4>
                <ul className="space-y-3 text-slate-700 font-medium">
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-[#007acc]" /> {t.services.d1_1}</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-[#007acc]" /> {t.services.d1_2}</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-[#007acc]" /> {t.services.d1_3}</li>
                </ul>
              </div>
              <div className="bg-cyan-50/50 border border-cyan-100 p-8 rounded-2xl hover:shadow-md transition-all">
                <h4 className="text-xl font-bold mb-4 flex items-center text-slate-900"><Activity className="mr-3 text-cyan-600" /> {t.services.d2}</h4>
                <ul className="space-y-3 text-slate-700 font-medium">
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-cyan-500" /> {t.services.d2_1}</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-cyan-500" /> {t.services.d2_2}</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-cyan-500" /> {t.services.d2_3}</li>
                </ul>
              </div>
              <div className="bg-indigo-50/50 border border-indigo-100 p-8 rounded-2xl hover:shadow-md transition-all">
                <h4 className="text-xl font-bold mb-4 flex items-center text-slate-900"><Globe className="mr-3 text-indigo-600" /> {t.services.d3}</h4>
                <ul className="space-y-3 text-slate-700 font-medium">
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-indigo-500" /> {t.services.d3_1}</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-indigo-500" /> {t.services.d3_2}</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-indigo-500" /> {t.services.d3_3}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* COLLABORATION MODELS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#007acc] uppercase mb-3">{t.models.badge}</h2>
            <h3 className="text-4xl font-black text-slate-900">{t.models.title}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ModelCard 
              title={t.models.m1Title}
              subtitle={t.models.m1Sub}
              desc={t.models.m1Desc}
            />
            <ModelCard 
              title={t.models.m2Title}
              subtitle={t.models.m2Sub}
              desc={t.models.m2Desc}
              highlight={false}
            />
            <ModelCard 
              title={t.models.m3Title}
              subtitle={t.models.m3Sub}
              desc={t.models.m3Desc}
            />
          </div>
        </div>
      </section>

      {/* PORTFOLIO / WORKS */}
      <section id="portfolio" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#007acc] uppercase mb-3">{t.portfolio.badge}</h2>
            <h3 className="text-4xl font-black text-slate-900">{t.portfolio.title}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Project 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="h-64 bg-slate-200 relative overflow-hidden">
                <img 
                  src={`${CDN_BASE}/duoscore-cover.jpg`} 
                  alt="DuoScore Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-slate-200"
                  onError={(e) => { e.target.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="; e.target.className="w-full h-full object-cover bg-slate-200" }}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">DuoScore</h4>
                    <p className="text-sm font-bold text-[#007acc]">Scale-up Startup • Global</p>
                  </div>
                  <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-medium">FinTech / Web3</span>
                </div>
                <p className="text-slate-600 mb-6">{t.portfolio.p1Desc}</p>
                <div className="flex gap-2 flex-wrap">
                  <Tag text="Web3" /><Tag text="AI" /><Tag text="Smart Contracts" />
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="h-64 bg-slate-200 relative overflow-hidden">
                <img 
                  src={`${CDN_BASE}/sungroup-erp-cover.jpg`} 
                  alt="SunGroup ERP" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-slate-200"
                  onError={(e) => { e.target.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="; e.target.className="w-full h-full object-cover bg-slate-200" }}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">SunGroup Core ERP</h4>
                    <p className="text-sm font-bold text-[#007acc]">Enterprise Core System • Vietnam</p>
                  </div>
                  <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-medium">ERP / DX</span>
                </div>
                <p className="text-slate-600 mb-6">{t.portfolio.p2Desc}</p>
                <div className="flex gap-2 flex-wrap">
                  <Tag text="ERP" /><Tag text="Cloud Infra" /><Tag text="API Integrations" />
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
               <div className="h-64 bg-slate-200 relative overflow-hidden">
                <img 
                  src={`${CDN_BASE}/rammdex-cover.jpg`} 
                  alt="RAMMDEX Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-slate-200"
                  onError={(e) => { e.target.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="; e.target.className="w-full h-full object-cover bg-slate-200" }}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">RAMMDEX</h4>
                    <p className="text-sm font-bold text-[#007acc]">30,000+ Active Users • Singapore</p>
                  </div>
                  <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-medium">DeFi / DEX</span>
                </div>
                <p className="text-slate-600 mb-6">{t.portfolio.p3Desc}</p>
                <div className="flex gap-2 flex-wrap">
                  <Tag text="Solidity" /><Tag text="ReactJS" /><Tag text="NodeJS" /><Tag text="Polygon" />
                </div>
              </div>
            </div>

             {/* Project 4 */}
             <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
               <div className="h-64 bg-slate-200 relative overflow-hidden">
                <img 
                  src={`${CDN_BASE}/flipjungle-cover.jpg`} 
                  alt="FlipJungle AI" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-slate-200"
                  onError={(e) => { e.target.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="; e.target.className="w-full h-full object-cover bg-slate-200" }}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">FlipJungle AI</h4>
                    <p className="text-sm font-bold text-[#007acc]">EdTech Startup • Korea/Africa</p>
                  </div>
                  <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-medium">EdTech / AI</span>
                </div>
                <p className="text-slate-600 mb-6">{t.portfolio.p4Desc}</p>
                <div className="flex gap-2 flex-wrap">
                  <Tag text="Applied AI" /><Tag text="Mobile App" /><Tag text="Cloud" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-sm font-bold tracking-widest text-[#007acc] uppercase mb-3">{t.team.badge}</h2>
             <h3 className="text-4xl font-black text-slate-900">{t.team.title}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <TeamCard 
              name="Dewey Duong" 
              role="CEO" 
              bio={t.team.t1Desc}
              imageSrc={`${CDN_BASE}/dewey-duong.jpg`}
            />
            <TeamCard 
              name="Dr. Harvey Pham" 
              role="CTO" 
              bio={t.team.t2Desc}
              imageSrc={`${CDN_BASE}/harvey-pham.jpg`}
            />
            <TeamCard 
              name="Donald Nguyen" 
              role="Head of Product" 
              bio={t.team.t3Desc}
              imageSrc={`${CDN_BASE}/donald-nguyen.jpg`}
            />
            <TeamCard 
              name="Harris Vu" 
              role="Head of AI" 
              bio={t.team.t4Desc}
              imageSrc={`${CDN_BASE}/harris-vu.jpg`}
            />
            <TeamCard 
              name="Vincent Le" 
              role="Head of IT & Blockchain" 
              bio={t.team.t5Desc}
              imageSrc={`${CDN_BASE}/vincent-le.jpg`}
            />
            <TeamCard 
              name="Michael Lee" 
              role="Head of UX/UI" 
              bio={t.team.t6Desc}
              imageSrc={`${CDN_BASE}/michael-lee.jpg`}
            />
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer id="contact" className="bg-white text-slate-600 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
            
            {/* Column 1: Brand & Contact (Span 5) */}
            <div className="md:col-span-12 lg:col-span-5 lg:pr-8">
              <h2 className="text-lg font-black text-[#007acc] uppercase tracking-wide mb-6 h-8 flex items-center">AXYZTANT</h2>
              <p className="mb-6 font-medium text-slate-600 leading-relaxed">{t.footer.desc}</p>
              <div className="space-y-3 font-medium">
                <p className="flex items-center"><Mail className="w-5 h-5 mr-3 text-[#007acc]"/> contact@axyztant.com</p>
                <p className="flex items-center"><Phone className="w-5 h-5 mr-3 text-[#007acc]"/> (+84) 0899991187</p>
                <p className="flex items-center"><Globe className="w-5 h-5 mr-3 text-[#007acc]"/> www.axyztant.com</p>
              </div>
            </div>
            
            {/* Column 2: Locations (Span 4) */}
            <div className="md:col-span-6 lg:col-span-4">
              <h4 className="text-slate-900 font-bold mb-6 text-lg flex items-center h-8">{t.footer.loc}</h4>
              <ul className="space-y-4 font-medium text-slate-600">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#007acc] shrink-0 mt-0.5" />
                  <span>164/38 Nguyen Chanh, Da Nang</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#007acc] shrink-0 mt-0.5" />
                  <span>31 Nguyen Duy Trinh, Vinh, Nghe An</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Company Links (Span 3) */}
            <div className="md:col-span-6 lg:col-span-3">
              <h4 className="text-slate-900 font-bold mb-6 text-lg flex items-center h-8">{t.footer.comp}</h4>
              <ul className="space-y-3 font-medium text-slate-600">
                <li><a href="#about" className="hover:text-[#007acc] transition-colors">{t.nav.about}</a></li>
                <li><a href="#services" className="hover:text-[#007acc] transition-colors">{t.nav.services}</a></li>
                <li><a href="#portfolio" className="hover:text-[#007acc] transition-colors">{t.nav.portfolio}</a></li>
                <li><a href="#team" className="hover:text-[#007acc] transition-colors">{t.nav.team}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-slate-400">
            <p>© 2026 Axyztant Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-components for cleaner code
function StatCard({ value, label, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-[#007acc]/10 text-[#007acc] rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-3xl font-black text-slate-900 mb-1">{value}</h4>
      <p className="text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
      <div className="mb-6">{icon}</div>
      <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#007acc]/40 transition-all">
      <div className="w-12 h-12 bg-[#007acc]/10 text-[#007acc] rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function ModelCard({ title, subtitle, desc, highlight = false }) {
  return (
    <div className={`p-8 rounded-2xl border ${highlight ? 'bg-[#007acc] border-[#007acc] text-white shadow-xl shadow-[#007acc]/20 transform md:-translate-y-2' : 'bg-white border-slate-200 text-slate-800'}`}>
      <p className={`text-sm font-bold mb-2 uppercase tracking-wide ${highlight ? 'text-[#b3e0ff]' : 'text-[#007acc]'}`}>{subtitle}</p>
      <h4 className={`text-2xl font-black mb-4 ${highlight ? 'text-white' : 'text-slate-900'}`}>{title}</h4>
      <p className={`${highlight ? 'text-[#e6f5ff]' : 'text-slate-600'} leading-relaxed`}>{desc}</p>
    </div>
  );
}

function TeamCard({ name, role, bio, imageSrc }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-100 text-center shadow-sm hover:shadow-lg transition-all">
      <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden border-4 border-white shadow-md relative">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E";
            e.target.className="w-full h-full p-6 object-contain bg-slate-100" 
          }}
        />
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-1">{name}</h4>
      <p className="text-sm font-bold text-[#007acc] uppercase tracking-wide mb-4">{role}</p>
      <p className="text-slate-600 text-sm leading-relaxed">{bio}</p>
    </div>
  );
}

function Tag({ text }) {
  return (
    <span className="bg-[#007acc]/10 text-[#007acc] border border-[#007acc]/20 text-xs px-2.5 py-1 rounded-md font-semibold">
      {text}
    </span>
  );
}

function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}