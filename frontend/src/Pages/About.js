import "../Styles/About.css";
import "../Styles/Styles.css";


const AboutUs = () => {
    const sweetImage1 = "/Images/aboutpage1.png"; // Header image URL
    const sweetImage2 = "/Images/aboutpage2.png"; // Premium sweet image URL
    const sweetImage3 = "/Images/aboutpage3.png"; // Delicious sweet image URL

    return (
        <div className="about-us">
            <section className="about-header">
                <img src={sweetImage1} alt="Assorted sweets" className="about-header-image" />
            </section>

            {/* Section Title with Arrows */}
            <section className="about-title">
                <div className="section-title">
                    <span className="line"></span>
                    <h2>About Us</h2>
                    <span className="line"></span>
                </div>
            </section>


            <section className="about-content">
                <p>
                    Sweets are more than just desserts; they are a blend of art, tradition, and emotion that connect generations. In cultures worldwide, sweets hold a symbolic place, marking milestones like weddings, festivals, religious ceremonies, and celebrations of achievements. The recipes for these confections are often passed down through generations, preserving flavors and techniques that keep heritage alive.
                </p>
                <p>
                    From rich, syrup-soaked treats like baklava and gulab jamun to delicate pastries, chocolate truffles, and creamy fudges, sweets vary immensely by region, yet they share a universal appeal. The ingredients—often simple, like sugar, milk, nuts, and spices—are transformed through careful preparation, creating complex flavors that offer comfort and indulgence.
                </p>
                <p>
                    In modern times, sweets have evolved to cater to changing tastes and dietary needs, introducing options that are vegan, gluten-free, or low-sugar, expanding their reach to more people. Beyond flavor, sweets are about the joy of sharing; whether given as a gift or enjoyed with friends, they bring moments of happiness and connection that last long after the last bite.
                </p>
            </section>

            <section className="about-quality">
                <div className="about-quality-item">
                    <div className="image-container">
                        <img src={sweetImage2} alt="Premium sweet" className="about-quality-image" />
                    </div>
                    <div className="text-container1">
                        <h3>Premium Quality</h3>
                        <p1>
                        Sweets are a universal delight, enjoyed across cultures and age groups for their variety and the
                        joy they bring to special occasions or everyday moments. From chocolates and candies to pastries
                        and traditional confections, sweets offer a range of flavors, textures, and experiences. They can
                        be simple or intricate, with recipes that have been passed down through generations or reinvented
                        to match modern tastes. Essential ingredients like sugar, cream, flour, and flavorings form the
                        foundation of many sweets, while unique regional specialties, such as Turkish delight or mochi, 
                        add cultural richness to the world of confections. Health-conscious variations, including vegan, 
                        low-sugar, and gluten-free sweets, ensure that there’s a treat for everyone to enjoy.
                        </p1>
                    </div>
                    <div className="text-container2">
                        <p>
                        Sweets are more than just desserts; they are a blend of art, tradition, and emotion that connect 
                        generations. In cultures worldwide, sweets hold a symbolic place, marking milestones like weddings, 
                        festivals, religious ceremonies, and celebrations of achievements. The recipes for these confections
                        are often passed down through generations, preserving flavors and techniques that keep heritage alive.
                        Sweets bring a touch of joy to every moment, blending timeless tradition with modern creativity. From
                         delicate pastries to decadent chocolates, each treat is a celebration of flavor, crafted to delight and 
                         indulge. Whether it’s a small reward at the end of a long day or the centerpiece of a celebration, sweets
                          have a unique way of turning ordinary moments into cherished memories. At our shop, we believe in the magic 
                          of high-quality ingredients and artisanal techniques, ensuring that every bite is a perfect balance of
                           texture and taste. Let us add a little sweetness to your life, one delicious creation at a time.
                        </p>
                    </div>
                    <div className="text-container3">
                        <p>
                        Sweets are more than just desserts; they are a blend of art, tradition, and emotion that connect 
                        generations. In cultures worldwide, sweets hold a symbolic place, marking milestones like weddings, 
                        festivals, religious ceremonies, and celebrations of achievements. The recipes for these confections
                        are often passed down through generations, preserving flavors and techniques that keep heritage alive.
                        Sweets bring a touch of joy to every moment, blending timeless tradition with modern creativity. From
                         delicate pastries to decadent chocolates, each treat is a celebration of flavor, crafted to delight and 
                         indulge. Whether it’s a small reward at the end of a long day or the centerpiece of a celebration, sweets
                          have a unique way of turning ordinary moments into cherished memories. At our shop, we believe in the magic 
                          of high-quality ingredients and artisanal techniques, ensuring that every bite is a perfect balance of
                           texture and taste. Let us add a little sweetness to your life, one delicious creation at a time.
                        </p>
                    </div>
                    <div className="text-container4">
                        <p>
                        Sweets are more than just desserts; they are a blend of art, tradition, and emotion that connect 
                        generations. In cultures worldwide, sweets hold a symbolic place, marking milestones like weddings, 
                        festivals, religious ceremonies, and celebrations of achievements. The recipes for these confections
                        are often passed down through generations, preserving flavors and techniques that keep heritage alive.
                        Sweets bring a touch of joy to every moment, blending timeless tradition with modern creativity. From
                         delicate pastries to decadent chocolates, each treat is a celebration of flavor, crafted to delight and 
                         indulge. Whether it’s a small reward at the end of a long day or the centerpiece of a celebration, sweets
                          have a unique way of turning ordinary moments into cherished memories. At our shop, we believe in the magic 
                          of high-quality ingredients and artisanal techniques, ensuring that every bite is a perfect balance of
                           texture and taste. Let us add a little sweetness to your life, one delicious creation at a time.
                        </p>
                    </div>
                </div>

                <div className="about-quality-item">
                    <div className="image-container">
                        <img src={sweetImage3} alt="Premium sweet" className="about-quality-image" />
                    </div>
                    <div className="text-container1">
                        <h3>Delicious Sweets</h3>
                        <p1>
                        Sweets are a universal delight, enjoyed across cultures and age groups for their variety and the
                        joy they bring to special occasions or everyday moments. From chocolates and candies to pastries
                        and traditional confections, sweets offer a range of flavors, textures, and experiences. They can
                        be simple or intricate, with recipes that have been passed down through generations or reinvented
                        to match modern tastes. Essential ingredients like sugar, cream, flour, and flavorings form the
                        foundation of many sweets, while unique regional specialties, such as Turkish delight or mochi, 
                        add cultural richness to the world of confections. Health-conscious variations, including vegan, 
                        low-sugar, and gluten-free sweets, ensure that there’s a treat for everyone to enjoy.
                        </p1>
                    </div>
                    <div className="text-container2">
                        <p>
                        Sweets are more than just desserts; they are a blend of art, tradition, and emotion that connect 
                        generations. In cultures worldwide, sweets hold a symbolic place, marking milestones like weddings, 
                        festivals, religious ceremonies, and celebrations of achievements. The recipes for these confections
                        are often passed down through generations, preserving flavors and techniques that keep heritage alive.
                        Sweets bring a touch of joy to every moment, blending timeless tradition with modern creativity. From
                         delicate pastries to decadent chocolates, each treat is a celebration of flavor, crafted to delight and 
                         indulge. Whether it’s a small reward at the end of a long day or the centerpiece of a celebration, sweets
                          have a unique way of turning ordinary moments into cherished memories. At our shop, we believe in the magic 
                          of high-quality ingredients and artisanal techniques, ensuring that every bite is a perfect balance of
                           texture and taste. Let us add a little sweetness to your life, one delicious creation at a time.
                        </p>
                    </div>
                    <div className="text-container3">
                        <p>
                        Sweets are more than just desserts; they are a blend of art, tradition, and emotion that connect 
                        generations. In cultures worldwide, sweets hold a symbolic place, marking milestones like weddings, 
                        festivals, religious ceremonies, and celebrations of achievements. The recipes for these confections
                        are often passed down through generations, preserving flavors and techniques that keep heritage alive.
                        Sweets bring a touch of joy to every moment, blending timeless tradition with modern creativity. From
                         delicate pastries to decadent chocolates, each treat is a celebration of flavor, crafted to delight and 
                         indulge. Whether it’s a small reward at the end of a long day or the centerpiece of a celebration, sweets
                          have a unique way of turning ordinary moments into cherished memories. At our shop, we believe in the magic 
                          of high-quality ingredients and artisanal techniques, ensuring that every bite is a perfect balance of
                           texture and taste. Let us add a little sweetness to your life, one delicious creation at a time.
                        </p>
                    </div>
                    <div className="text-container4">
                        <p>
                        Sweets are more than just desserts; they are a blend of art, tradition, and emotion that connect 
                        generations. In cultures worldwide, sweets hold a symbolic place, marking milestones like weddings, 
                        festivals, religious ceremonies, and celebrations of achievements. The recipes for these confections
                        are often passed down through generations, preserving flavors and techniques that keep heritage alive.
                        Sweets bring a touch of joy to every moment, blending timeless tradition with modern creativity. From
                         delicate pastries to decadent chocolates, each treat is a celebration of flavor, crafted to delight and 
                         indulge. Whether it’s a small reward at the end of a long day or the centerpiece of a celebration, sweets
                          have a unique way of turning ordinary moments into cherished memories. At our shop, we believe in the magic 
                          of high-quality ingredients and artisanal techniques, ensuring that every bite is a perfect balance of
                           texture and taste. Let us add a little sweetness to your life, one delicious creation at a time.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default AboutUs;