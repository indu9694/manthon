let reviews = [
    // Digital Automation Company Reviews
    "The automation service provided was exceptional! Our workflow has improved drastically.",
    "They truly know how to simplify complex processes. Highly recommend for business automation!",
    "Great digital automation solutions. The team was professional and always available to assist.",
    "Our business has become much more efficient thanks to their automation tools.",
    "The automation system they built for us is a game changer. It saves us so much time.",
    "Incredible service and a top-tier automation platform. Couldn't be happier.",
    "Their automation expertise helped us streamline our operations in no time.",
    "The support team was responsive and helped us understand how to best use the automation tools.",
    "We saw immediate results after implementing their automation solutions.",
    "This company provides some of the best automation services in the industry.",
    "They brought innovation and simplicity to our digital operations. Highly recommended!",
    "Their automation software is intuitive and easy to integrate into our business.",
    "The automation system reduced manual work and increased our team's productivity by 40%.",
    "From consultation to implementation, their service was flawless. Great team to work with.",
    "We are extremely satisfied with the digital transformation they provided through automation.",
    "Their tools have automated tasks that used to take hours. An invaluable service for businesses.",
    "Their solutions helped us cut down operational costs and improve workflow efficiency.",
    "The team's attention to detail and commitment to providing the best automation is unmatched.",
    "Fast, efficient, and highly effective digital automation services. They exceeded our expectations.",
    "Their software tools made automation easy for our entire team to adopt.",
    "We’ve had an amazing experience with their automation services. The results were immediate.",
    "Their automation solutions have allowed us to focus more on growth and less on daily operations.",
    "We could not have achieved our digital transformation goals without their automation services.",
    "The best automation company we’ve worked with so far. Their systems just work!",
    "Our workflow automation was seamless, thanks to their well-designed tools.",
    "The automation project was delivered on time, with fantastic results. Highly recommended.",
    "Their automation tools are flexible and adaptable, making them perfect for our unique business needs.",
    "Exceptional automation expertise. They helped us optimize our business processes perfectly.",
    "The automation tools provided were exactly what we needed to scale our business.",
    "Professional, skilled, and easy to work with. Their automation solutions transformed our workflow.",
    "Their automation services saved us both time and money. Our efficiency has never been better.",
    "This company brought our outdated systems into the digital age with ease.",
    "Their automation solutions have made day-to-day tasks more manageable and error-free.",
    "The automation system implemented by their team has revolutionized how we operate.",
    "Top-notch service from a team that clearly knows automation inside and out.",
    "They made our digital transition smooth and hassle-free with their fantastic automation tools.",
    "Their automation services exceeded our expectations. Our operations are now fully optimized.",
    "Fantastic customer support throughout the automation process. We're very happy with the results.",
    "The automation solutions provided saved us significant time and effort. We highly recommend them.",
    "Our company's productivity has improved significantly thanks to their automation services.",

    // Software Company Reviews
    "The custom software they built for us has worked flawlessly since day one.",
    "Professional, quick, and high-quality software development services. The best we’ve experienced.",
    "The software solutions they provided fit our needs perfectly. We’re very happy with the results.",
    "They developed software for us that was beyond our expectations. Highly recommended!",
    "Great experience with their software development team. Delivered on time and with fantastic results.",
    "The software system they implemented for us has greatly improved our operational efficiency.",
    "Their software is easy to use, and the customer support is always available and helpful.",
    "A professional team that truly understands software development and customer needs.",
    "We’ve used their software for several months now, and it's reliable, efficient, and user-friendly.",
    "Their custom software solution solved problems we didn’t even realize we had!",
    "Highly skilled developers that delivered top-quality software within our budget.",
    "The software solutions provided by this company helped us scale our business rapidly.",
    "They provided us with robust software that streamlined many of our internal processes.",
    "Excellent service and support throughout the software development process.",
    "The software they created for us has been incredibly reliable and easy to manage.",
    "We couldn’t have asked for a better software development partner.",
    "They understood our business needs perfectly and delivered software that works seamlessly.",
    "From the initial meeting to the final product, the process was smooth and professional.",
    "The software development process was efficient, and the final product has exceeded expectations.",
    "The team worked closely with us to ensure the software matched our specific needs.",
    "They delivered a scalable, secure, and easy-to-use software solution that has helped us grow.",
    "Their software development expertise is second to none. Highly recommended!",
    "The software they created has saved us countless hours and improved our efficiency.",
    "Fantastic customer service and high-quality software development. We’re extremely satisfied.",
    "Their attention to detail during the software development process was impressive.",
    "They delivered a cutting-edge software solution on time and within budget.",
    "The software development team was professional, skilled, and delivered great results.",
    "We’re very happy with the software solution they developed for us. It's exactly what we needed.",
    "Their software has automated many of our daily tasks, making our work much more efficient.",
    "The software solution they provided was user-friendly and exactly what we needed.",

    // Learning or Guidance Reviews
    "The guidance I received here helped me advance my career significantly.",
    "Their training program was comprehensive, and the instructors were knowledgeable and engaging.",
    "An exceptional learning experience. I feel much more confident in my skills now.",
    "The mentorship provided here is top-tier. I learned so much in such a short period of time.",
    "Great learning platform! The resources provided were invaluable to my growth.",
    "The guidance provided was exceptional, and the courses were highly practical.",
    "They offer excellent training programs that are well-structured and easy to follow.",
    "Thanks to their guidance, I’ve been able to achieve my professional goals much faster.",
    "The support I received throughout the learning process was phenomenal.",
    "The mentors here genuinely care about your success and are always willing to help.",
    "Their training materials are well-organized, and the learning platform is easy to navigate.",
    "Great experience with their learning platform. The courses were informative and well-taught.",
    "Their guidance was exactly what I needed to take my career to the next level.",
    "The mentorship and guidance provided here are the best I’ve ever experienced.",
    "The courses were engaging, practical, and delivered by knowledgeable instructors.",
    "Their training programs helped me gain the skills needed to excel in my industry.",
    "The guidance provided during the training program was second to none.",
    "An excellent learning experience with highly qualified mentors and well-structured courses.",
    "Their guidance helped me navigate my career path with confidence.",
    "I couldn’t have asked for better mentorship. The support and guidance were outstanding.",
    "Their training programs are designed to meet the needs of professionals at all levels.",
    "The courses were interactive, and the guidance provided was incredibly useful.",
    "The training I received here has made a significant impact on my career.",
    "Their mentorship program was incredibly valuable. I learned a lot from the expert instructors.",
    "The training materials were easy to follow, and the instructors were highly experienced.",

    // More Mixed Reviews
    "Their automation solutions and software development are the best in the business!",
    "Great company! They provide everything from automation tools to expert guidance.",
    "We received high-quality software solutions and outstanding customer support.",
    "Their software and automation solutions have made a huge difference in our daily operations.",
    "The learning programs offered here are top-notch, and the automation tools are fantastic.",
    "We’re very satisfied with the automation tools and software solutions they provided.",
    "An excellent company that provides a mix of automation, software, and learning services.",
    "The mentorship, software development, and automation tools here are all top quality.",
    "The software and automation systems provided have transformed the way we do business.",
    "I’ve used their learning platform and automation tools, and both are excellent."
  ];

  let previousReviewIndex = null;
  let typingSpeed = 100; // Speed in milliseconds

  function getRandomReview() {
    // Get a random review, ensuring it's not the same as the previous one
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * reviews.length);
    } while (newIndex === previousReviewIndex);

    previousReviewIndex = newIndex;
    return reviews[newIndex];
  }

  function startTyping() {
    let reviewBox = document.getElementById('reviewBox');
    let reviewText = getRandomReview();
    let index = 0;

    // Clear existing content in the textarea
    reviewBox.value = "";

    // Start typing automatically
    let typingInterval = setInterval(() => {
      if (index < reviewText.length) {
        reviewBox.value += reviewText.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
  }

  function clearReview() {
    document.getElementById('reviewBox').value = "";
    previousReviewIndex = null; // Reset so no review is repeated immediately
  }

  function copyReview() {
    let reviewBox = document.getElementById('reviewBox');
    reviewBox.select();
    reviewBox.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the textarea
    document.execCommand("copy");
    alert("Review copied to clipboard!");
  }
