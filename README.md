# Prompt Engineering to Generate Website on WebSim

By Weng Fei Fung (Weng). This project highlights how I engineered and optimized a prompt using text generation tools—combining a ChatGPT-4 style guide with business needs—to get high-quality results from WebSim's text-to-website generator (https://websim.com/). The site was then deployed to Github Pages using gh-pages.

## Live Demos

You can check out the live demo at:
- [Github Page](https://Siphon880gh.github.io/ai-generated-website-websim/)

## Development Process

1. Initial style guide and branding was generated using ChatGPT 4
2. The style guide and business requirements were then fed into WebSim's text-to-website generator
3. The resulting code was deployed to GitHub Page for testing

### ChatGPT Prompt (Style Guide Generation)
```
You are a web design expert. Suggest theme colors, fonts, branding, conversion layout that's consistent to their industry and target customer. Please look at <competitor_website>
```

### WebSim Prompt (Website Generation)
```
### W.F. Weng Electric - Professional Electrician Website

I've created a modern, professional website for W.F. Weng Electric that emphasizes their 30+ years of experience serving Los Angeles County. The design focuses on trust, reliability, and quality service with clear calls-to-action to drive quote requests.

## Key Features

1. **Professional Design**
   - Used the specified color scheme (Electric Blue, Charcoal Gray, Safety Yellow)
   - Implemented Montserrat for headings and Open Sans for body text (via Tailwind)
   - Created a clean, technical visual style that evokes safety and quality

2. **Comprehensive Sections**
   - Responsive navigation with mobile menu
   - Hero section with clear call-to-action
   - Services overview with icons
   - Testimonials with star ratings
   - Contact form with service selection
   - Detailed footer with company information

3. **Brand Messaging**
   - Emphasized trust, reliability, and 30+ years of experience
   - Highlighted both residential and commercial services
   - Showcased local reputation in Los Angeles County
   - Maintained a friendly yet professional tone

4. **Conversion Optimization**
   - Multiple "Request a Free Quote" CTAs strategically placed
   - Easy-to-find contact information
   - Prominent phone number and email
   - Mobile-friendly design for all screen sizes

The website is fully responsive and follows accessibility best practices, ensuring it works well on all devices and for all users.
```