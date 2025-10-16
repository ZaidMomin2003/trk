export type Product = {
  name: string;
  description: string;
};

export type ProductCategory = {
  category: string;
  items: Product[];
};

export const productList: ProductCategory[] = [
  {
    category: "💻 Hardware",
    items: [
      { name: "Apple MacBook Pro (16-inch, M3 Max, 48GB RAM, 1TB SSD)", description: "High-performance laptop for model development and compute-heavy LLM fine-tuning." },
      { name: "Dell UltraSharp 27\" 4K Monitor (U2723QE)", description: "4K USB-C professional display for multitasking and data visualization." },
      { name: "Dell Premier Wireless Keyboard (KB900)", description: "Silent, rechargeable wireless keyboard for extended use." },
      { name: "Dell Premier Wireless Mouse (MS900)", description: "Precision ergonomic wireless mouse with multi-device connectivity." },
      { name: "Dell WD19S Docking Station (130W)", description: "USB-C dock for connecting monitor, peripherals, and power through a single cable." },
      { name: "Jabra Evolve2 65 Bluetooth Headset", description: "Noise-cancelling headset for meetings, pairable with laptop and phone." },
      { name: "Logitech Brio 4K Webcam", description: "Ultra HD webcam for video conferencing and team demos." },
      { name: "Samsung T7 Portable SSD (1TB)", description: "External SSD for fast data transfer and local model checkpoint storage." },
      { name: "AWS-branded Targus Laptop Backpack", description: "Premium protective backpack for laptop and accessories." },
      { name: "Apple 140W USB-C Power Adapter + Cable", description: "Official high-wattage charger for MacBook Pro." },
      { name: "Belkin 6-Socket Surge Protector", description: "Power surge protection for home/office setup." },
      { name: "APC Back-UPS 650VA (Optional)", description: "Battery backup for safe shutdown during power loss." },
    ],
  },
  {
    category: "🧠 Software Access & Licenses",
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
    category: "☕ AWS Swag & Welcome Kit",
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
    category: "🌐 Connectivity & Utility Support",
    items: [
      { name: "Wi-Fi Reimbursement (₹2,000–₹3,000/month)", description: "For home broadband connection (Airtel / Jio Fiber)." },
      { name: "AWS Global VPN Access", description: "Secure internal network access for infrastructure and data services." },
      { name: "Cloud Compute Credits (~$500–$1000/month)", description: "AWS service credits for Bedrock, SageMaker, and EC2 usage." },
    ],
  },
];
