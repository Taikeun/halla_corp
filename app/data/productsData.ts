export const products = [
    {
        title: "씨레이션 화스너 (Serration Fastener)",
        desc: "(주)한라가 직접 생산하고 가공하는 고정밀 씨레이션 화스너입니다. 최첨단 레이저 절단 기술을 활용하여 오차 없는 정밀도를 자랑하며, 현장 상황에 맞는 비규격 맞춤형 설계와 제작 서비스를 제공합니다. 철판 소재의 견고함과 한라만의 가공 노하우가 결합되어 최상의 품질을 보장합니다.",
        features: ["당사 직접 생산 / 가공", "철판 레이저 가공", "비규격품 설계 제작"],
        images: ["/images/products/serration_fastener.png"]
    },
    {
        title: "일반 화스너 (General Fastener)",
        desc: "다양한 산업 현장에서 폭넓게 사용되는 고품질 일반 화스너입니다. 정밀 레이저 가공을 통해 우수한 내구성과 정확한 규격을 보장하며, 고객의 요구사항에 맞춘 비규격 제품 설계 및 제작이 가능합니다. (주)한라의 직접 생산 시스템으로 신뢰할 수 있는 품질을 약속드립니다.",
        features: ["당사 직접 생산 / 가공", "철판 레이저 가공", "비규격품 설계 제작"],
        images: ["/images/products/general_fastener.png"]
    },
    {
        title: "씨레이션 와샤 / 평와샤 (Serration / Flat Washer)",
        desc: "건축 및 산업용으로 광범위하게 사용되는 고품질 와샤입니다. 레이저 및 프레스 가공 설비를 통해 표준 규격부터 특수 비규격 사이즈까지 정밀하게 생산하며, 씨레이션 가공을 통해 체결력을 강화한 제품도 공급합니다.",
        features: ["당사 직접 생산 / 가공", "레이져 및 프레스 가공", "비규격 와샤 생산 가능"],
        images: ["/images/products/serration_washer.png", "/images/products/flat_washer.png"]
    },
    {
        title: "보강대 (Reinforcement Bar)",
        desc: "스틸 및 STS(스테인리스 스틸) 자재를 사용하여 제작된 고강도 보강대입니다. 정밀 레이저 가공과 레이저 용접 기술을 적용하여 뛰어난 내구성과 마감을 자랑합니다.",
        features: ["스틸 및 STS 자재 사용", "레이저 가공", "레이저 용접"],
        images: [
            "/images/products/reinforcement_bar_v2_1.png",
            "/images/products/reinforcement_bar_v2_2.png",
            "/images/products/reinforcement_bar_v2_3.png"
        ],
        imageFit: "contain" as const
    },
    {
        title: "STS 제품 (STS Products)",
        desc: "내식성과 내구성이 뛰어난 스테인리스 스틸(STS) 자재를 사용하여 제작된 고품질 제품입니다. 정밀 레이저 가공과 레이저 용접 기술을 통해 복잡한 형상도 깔끔하게 구현하며, 반도체 및 디스플레이 장비 등 청정도가 요구되는 환경에 적합합니다.",
        features: ["STS 자재 사용", "레이저 가공", "레이저 용접"],
        images: ["/images/products/sts_product.png"]
    },
    {
        title: "STS & STL 그레이팅 작업 (STS & STL Grating Work)",
        desc: "STS(스테인리스 스틸) 및 STL(스틸) 소재를 사용하여 제작된 맞춤형 그레이팅입니다. 정밀 레이저 가공과 레이저 용접을 통해 우수한 내구성과 하중 지지력을 자랑하며, 다양한 산업 현장에 최적화된 솔루션을 제공합니다.",
        features: ["STS & STL 자재 사용", "레이저 가공 / 레이저 용접"],
        images: ["/images/products/grating_work_1.png", "/images/products/grating_work_2.jpg"]
    },
    {
        title: "포밍바 및 트러스 가공 작업 (Forming Bar & Truss Processing Work)",
        desc: "건축 및 구조물에 필수적인 포밍바와 트러스를 정밀 가공합니다. STEEL 자재를 사용하여 강도를 확보하고, 첨단 레이저 용접 기술을 적용하여 자재의 손상과 변형을 최소화했습니다. 또한 톱 절단 방식과 전용 지그(Jig)를 활용하여 정밀도를 높이고 불량률을 획기적으로 낮춘 고품질 제품입니다.",
        features: ["STEEL 자재 사용", "레이저 용접 (자재 손상/변형 최소화)", "톱 절단 및 지그 정밀 가공 (불량률 최소화)"],
        images: ["/images/products/forming_truss_1.png", "/images/products/forming_truss_2.jpg"]
    },
    {
        title: "빌트업 작업 (Built-up Work)",
        desc: "STL(스틸) 자재를 사용하여 강도 높은 구조물을 제작합니다. 정밀 레이저 가공과 레이저 용접을 통해 자재의 손상 및 변형을 최소화하여 최상의 품질을 보장합니다.",
        features: ["STL 자재 사용", "레이저 가공", "레이저 용접 (자재 손상/변형 최소화)"],
        images: ["/images/products/builtup_work.png"]
    },
    {
        title: "트러스 용접 작업 (Truss Welding Work)",
        desc: "내식성이 우수한 아연도 각관을 사용하여 트러스를 제작합니다. 정교한 절단과 레이저 용접 기술을 적용하여 견고하고 안정적인 구조를 완성합니다.",
        features: ["아연도 각관 사용", "절단 및 레이저 용접"],
        images: ["/images/products/truss_welding.png"]
    },
    {
        title: "밀링 가공 작업 (Milling Processing Work)",
        desc: "STS(스테인리스 스틸) 자재를 레이저 절단 후 밀링기로 2차 정밀 가공하여 제작합니다. 고정밀 마감을 통해 치수 정확도와 표면 품질이 매우 우수합니다.",
        features: ["STS 자재 사용", "레이저 절단 / 밀링", "밀링 정밀 가공 마감"],
        images: ["/images/products/milling_processing.png"]
    },
    {
        title: "도어 스토퍼 (Door Stopper)",
        desc: "STS(스테인리스 스틸) 자재를 사용하여 레이저 가공 및 절곡 공정을 통해 제작된 도어 스토퍼입니다. 내구성이 뛰어나며 정밀한 절곡으로 기능성에 충실하게 설계되었습니다.",
        features: ["STS 자재 사용", "레이저 가공 / 절곡"],
        images: ["/images/products/door_stopper.png"]
    }
];
