export type Product = {
  name: string;
  description: string;
  price?: string;
  amazonLink?: string;
};

export type ProductCategory = {
  category: string;
  items: Product[];
};

export const productList: ProductCategory[] = [
  {
    category: "Hardware",
    items: [
      { 
        name: "💻 Apple MacBook Pro (16-inch, M3 Max, 48GB RAM, 1TB SSD)", 
        description: "High-performance laptop for model development and compute-heavy LLM fine-tuning.",
        price: "₹3,69,990",
        amazonLink: "https://www.amazon.in/Apple-MacBook-16-inch-16%E2%80%91core-40%E2%80%91core/dp/B0CM5SZ7CP"
      },
      { 
        name: '🖥️ Dell UltraSharp U2723QE 27" 4K USB-C Hub Monitor', 
        description: '27-inch 4K USB-C professional display for multitasking and data visualization.',
        price: '₹54,511.22',
        amazonLink: 'https://www.amazon.in/Dell-UltraSharp-USB-C-Hub-Monitor/dp/B09TQZP9CL'
      },
      { 
        name: '⌨️ Dell Premier Wireless Keyboard (KB900)', 
        description: 'Silent, rechargeable wireless keyboard for extended use.',
        price: '₹10,899',
        amazonLink: 'https://www.amazon.in/Dell-KB900-Collaboration-Keyboard-wireless-Interfaces/dp/B0CW6C9MVP'
      },
      { 
        name: '🖱️ Dell Premier Wireless Mouse (MS900)', 
        description: 'Precision ergonomic wireless mouse with multi-device connectivity.',
        price: '₹8,499',
        amazonLink: 'https://www.amazon.in/Dell-MS900-Rechargeable-Interface-2-4-Bluetooth-Resolution/dp/B0CW6MSCW7'
      },
      { 
        name: '📦 Dell WD19S Docking Station (130W)', 
        description: 'USB-C dock for connecting monitor, peripherals, and power through a single cable.',
        price: '₹14,499',
        amazonLink: 'https://www.amazon.in/Dell-Dock-WD19-Power-Delivery/dp/B09126B8HZ'
      },
      { 
        name: '🎧 Jabra Evolve2 65 Bluetooth Headset', 
        description: 'Noise-cancelling headset for meetings, pairable with laptop and phone.',
        price: '₹26,415',
        amazonLink: 'https://www.amazon.in/Jabra-Evolve2-Wireless-Headphones-Link380a/dp/B0897YVLPF'
      },
      { 
        name: '📷 Logitech Brio 4K Webcam', 
        description: 'Ultra HD webcam for video conferencing and team demos.',
        price: '₹2,795',
        amazonLink: 'https://www.amazon.in/Logitech-Calling-Noise-Canceling-Correction-Microsoft/dp/B09NBWWP79'
      },
      { 
        name: '💾 Samsung T7 Portable SSD (1TB)', 
        description: 'External SSD for fast data transfer and local model checkpoint storage.',
        price: '₹9,499',
        amazonLink: 'https://www.amazon.in/Samsung-10Gbps-External-Portable-MU-PC1T0T/dp/B087DFLF9S'
      },
      { name: "AWS-branded Targus Laptop Backpack", description: "Premium protective backpack for laptop and accessories." },
      { name: "Apple 140W USB-C Power Adapter + Cable", description: "Official high-wattage charger for MacBook Pro." },
      { name: "Belkin 6-Socket Surge Protector", description: "Power surge protection for home/office setup." },
    ],
  },
  {
    category: "Software Access & Licenses",
    items: [
      { name: "AWS SageMaker Studio (Enterprise License)", description: "End-to-end ML development, training, and deployment environment." },
      { name: "AWS Bedrock Access", description: "Managed service for foundational LLMs and prompt orchestration." },
      { name: "Amazon EKS (Elastic Kubernetes Service)", description: "Scalable container management for model hosting and microservices." },
      { name: "Amazon S3 / Glue / Athena / QuickSight", description: "Full AWS data analytics and storage suite." },
      { name: "PyTorch / TensorFlow / Hugging Face Transformers", description: "Pre-installed deep learning frameworks for model fine-tuning." },
      { name: "LangChain / LlamaIndex SDK Access", description: "Libraries for LLM application chaining and context augmentation." },
      { name: "Docker / Kubernetes / Terraform / AWS CDK", description: "Infrastructure as Code and MLOps tooling." },
      { name: "MLflow / Weights & Biases", description: "Experiment tracking and model lifecycle management." },
      { name: "Visual Studio Code / JetBrains PyCharm", description: "Developer IDEs with enterprise license keys." },
      { name: "AWS CLI / boto3 SDK", description: "Core command line and Python SDK tools for automation." },
      { name: "Slack / Amazon Chime / Jira / Confluence", description: "Team collaboration, project tracking, and documentation." },
      { name: "JetBrains All Products Pack License", description: "Includes PyCharm, DataSpell, IntelliJ, and WebStorm." },
      { name: "Grammarly Business License", description: "Writing assistant for documentation and research reports." },
      { name: "1Password Enterprise License", description: "Password and credential manager for secure key storage." },
    ],
  },
  {
    category: "AWS Swag & Welcome Kit",
    items: [
      { name: "AWS Hoodie (Black Zip-up)", description: "Premium cotton hoodie with embroidered AWS logo." },
      { name: "AWS T-Shirt (AI/ML Edition)", description: "Crew-neck T-shirt featuring “Build On AWS” branding." },
      { name: "AWS Coffee Mug (Matte Black)", description: "Ceramic mug with heat-resistant logo print." },
      { name: "AWS Water Bottle (Stainless Steel)", description: "Double-insulated metal bottle with AWS engraving." },
      { name: "AWS Notebook (Eco-Leather)", description: "A5 notebook paired with metallic AWS pen." },
      { name: "AWS Lanyard & ID Badge Holder", description: "Official AWS employee identification accessory." },
      { name: "AWS Stickers Pack", description: "Collection of re:Invent, SageMaker, and Bedrock-themed stickers." },
    ],
  },
  {
    category: "Connectivity & Utility Support",
    items: [
      { name: "Wi-Fi Reimbursement (₹2,000–₹3,000/month)", description: "For home broadband connection (Airtel / Jio Fiber)." },
      { name: "AWS Global VPN Access", description: "Secure internal network access for infrastructure and data services." },
      { name: "Cloud Compute Credits (~$500–$1000/month)", description: "AWS service credits for Bedrock, SageMaker, and EC2 usage." },
    ],
  },
];
