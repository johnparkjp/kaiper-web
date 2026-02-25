export function GET() {
  const content = `# KAIPER

## About
KAIPER is a cooling solutions brand that protects human performance in extreme heat environments. Founded by SCG Solutions Co, Ltd., KAIPER develops wearable cooling technology for outdoor workers in construction, logistics, manufacturing, and agriculture.

## Website
- URL: https://kaiper.io
- Languages: Korean (default), English

## Products

### 3in1 Waist Fan
- Waist-mounted cooling fan that doubles as a power bank
- 3-in-1 mode: Fan + Neckband + Power Bank
- Battery: 4,500mAh (up to 8 hours on low)
- Charging: USB-C Fast Charging (full in ~2 hours)
- Weight: 280g
- Noise: Under 35dB
- Water resistance: IP54
- Multiple wearing options: waist, desk, neckband

### Cooling Kit
- Arm Sleeves: UV protection + contact cooling fabric
- Cool Towel Hoodie: UV protection and cooling from head to neck
- Ice Pack: Attaches to fan for maximized cold air effect
- Cooling Wear: Maximum ventilation design for full-body cooling

## Enterprise Solutions
KAIPER offers customized bulk cooling solutions for:
- Construction sites
- Logistics and warehouse operations
- Manufacturing facilities
- Agricultural operations
Contact: contact@kaiper.io

## Key Facts
- Heat wave days have reached 28.5 per year
- 2,800+ annual heatstroke patients
- 4.5M+ outdoor workers affected
- Human concentration drops 50% above 38°C

## Pages
- / — Homepage with product overview and company vision
- /shop — Detailed product lineup and purchase inquiry
- /faq — Frequently asked questions (6 Q&As)
- /terms — Terms of service
- /privacy — Privacy policy

## Contact
- Email: contact@kaiper.io
- Instagram: @kaiper.official
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
