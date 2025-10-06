import React from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { IoCalendarOutline, IoPersonOutline, IoTimeOutline, IoArrowBack, IoShareSocial, IoHeart, IoHeartOutline } from 'react-icons/io5'

const BlogPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Sample blog data - in real app this would come from API
  const blogPosts = {
    1: {
      id: 1,
      title: "The Art of Wine Tasting: A Beginner's Guide",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=500&fit=crop&crop=center",
      author: "Master Sommelier",
      date: "October 3, 2025",
      readTime: "5 min read",
      category: "Wine Education",
      content: `
        <p>Wine tasting is an art form that combines all of your senses to fully appreciate the complexity and beauty of wine. Whether you're a complete beginner or looking to refine your palate, understanding the fundamentals of wine tasting will enhance your enjoyment and appreciation of this ancient beverage.</p>

        <h2>The Five S's of Wine Tasting</h2>
        
        <h3>1. See (Look)</h3>
        <p>Begin by examining the wine's appearance. Hold your glass against a white background and observe the color, clarity, and viscosity. The color can tell you about the wine's age, grape variety, and winemaking process. Red wines often start with deep purple hues when young and develop brick-red tones as they age.</p>

        <h3>2. Swirl</h3>
        <p>Gently swirl the wine in your glass to release its aromatic compounds. This action increases the wine's surface area and allows oxygen to interact with the wine, intensifying its bouquet. Watch how the wine moves - this can indicate alcohol content and body.</p>

        <h3>3. Smell (Nose)</h3>
        <p>The aroma is crucial to wine appreciation. Take a deep breath with your nose just above the rim of the glass. Try to identify different scents - fruits, flowers, herbs, spices, or earthy notes. The nose can reveal the wine's complexity and quality.</p>

        <h3>4. Sip (Taste)</h3>
        <p>Take a small sip and let the wine coat your entire mouth. Notice the initial flavors, the mid-palate development, and the finish. Consider the wine's sweetness, acidity, tannins, alcohol level, and body. Each element contributes to the overall balance.</p>

        <h3>5. Savor (Finish)</h3>
        <p>After swallowing, pay attention to the lingering flavors and sensations. A quality wine will have a pleasant, long-lasting finish that continues to evolve even after the wine has left your mouth.</p>

        <h2>Building Your Palate</h2>
        <p>Developing your wine tasting skills takes time and practice. Start by tasting different styles of wine and taking notes about what you experience. Don't be discouraged if you can't identify specific flavors immediately - your palate will develop with experience.</p>

        <p>Consider joining wine tasting groups, attending vineyard tours, or taking formal wine education courses. The more you taste and learn, the more you'll appreciate the incredible diversity and craftsmanship that goes into each bottle.</p>

        <h2>Essential Tasting Equipment</h2>
        <p>While you don't need expensive equipment to enjoy wine, a few basic tools can enhance your tasting experience:</p>
        <ul>
          <li>Proper wine glasses (different shapes for different wine styles)</li>
          <li>A notebook for recording your impressions</li>
          <li>Neutral crackers or bread to cleanse your palate</li>
          <li>A wine key or corkscrew</li>
          <li>A decanter for older red wines</li>
        </ul>

        <p>Remember, wine tasting is ultimately about personal enjoyment. While there are established techniques and terminology, the most important thing is to drink what you enjoy and continue exploring the wonderful world of wine.</p>
      `
    },
    2: {
      id: 2,
      title: "Noble Hill Vineyard: Heritage and Innovation",
      image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&h=500&fit=crop&crop=center",
      author: "Wine Expert",
      date: "September 28, 2025",
      readTime: "7 min read",
      category: "Vineyard Stories",
      content: `
        <p>Nestled in the rolling hills of the Mediterranean coastline, Noble Hill Vineyard represents a perfect marriage of time-honored winemaking traditions and cutting-edge innovation. For over three generations, the Noble Hill family has been crafting exceptional wines that capture the essence of their unique terroir.</p>

        <h2>A Legacy Rooted in Tradition</h2>
        <p>The story of Noble Hill begins in 1892 when Giovanni Noble first planted vines on the sun-drenched slopes of what would become one of the region's most respected vineyards. Giovanni's vision was simple yet profound: to create wines that would honor both the land and the people who tended it.</p>

        <p>From those humble beginnings, Noble Hill has grown into a renowned winery while maintaining its commitment to artisanal quality and sustainable practices. Each generation has added their own chapter to the Noble Hill story, always respecting the foundation laid by their predecessors.</p>

        <h2>The Terroir Advantage</h2>
        <p>What makes Noble Hill wines truly special is the unique combination of climate, soil, and topography that defines our vineyard. The Mediterranean climate provides warm, dry summers and mild winters - perfect conditions for grape growing. Our south-facing slopes ensure optimal sun exposure, while cooling coastal breezes help maintain the grapes' natural acidity.</p>

        <p>The soil composition is equally important to our wine's character. Our vineyards feature a complex mix of limestone, clay, and decomposed granite, providing excellent drainage while retaining just enough moisture to sustain the vines through the growing season.</p>

        <h2>Innovation Meets Tradition</h2>
        <p>While we deeply respect traditional winemaking methods, Noble Hill has never been afraid to embrace innovation when it serves the wine. Our state-of-the-art facility combines the best of both worlds: temperature-controlled fermentation tanks alongside traditional oak barrels, modern bottling lines working in harmony with hand-selection processes.</p>

        <p>We've invested in precision viticulture techniques, using satellite imagery and soil sensors to optimize our vineyard management. This technology helps us understand exactly what each vine needs, allowing us to make micro-adjustments that result in more consistent, higher-quality fruit.</p>

        <h2>Sustainable Practices</h2>
        <p>Sustainability isn't just a buzzword at Noble Hill - it's a way of life. We practice organic farming methods, using beneficial insects instead of harmful pesticides, and cover crops to improve soil health. Our water conservation efforts include drip irrigation systems and rainwater collection.</p>

        <p>Solar panels power much of our facility, and we've implemented a comprehensive recycling program that extends from the vineyard to the tasting room. We believe that taking care of the land today ensures that future generations can continue to enjoy Noble Hill wines.</p>

        <h2>The Future of Noble Hill</h2>
        <p>As we look to the future, Noble Hill remains committed to our founding principles while continuing to evolve and improve. We're experimenting with new grape varieties that might thrive in our changing climate, and we're always looking for ways to reduce our environmental impact while maintaining the exceptional quality our customers expect.</p>

        <p>Whether you're enjoying a bottle at our tasting room or at your own dinner table, every glass of Noble Hill wine carries with it the passion, dedication, and expertise of everyone who has contributed to our story. We invite you to be part of that story - to taste not just our wine, but our heritage.</p>
      `
    },
    3: {
      id: 3,
      title: "Perfect Wine Pairings for Mediterranean Cuisine",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=500&fit=crop&crop=center",
      author: "Culinary Specialist",
      date: "September 25, 2025",
      readTime: "6 min read",
      category: "Food & Wine",
      content: `
        <p>Mediterranean cuisine, with its emphasis on fresh ingredients, bold flavors, and healthy cooking methods, provides the perfect canvas for wine pairing adventures. The key to successful pairing lies in understanding how the characteristics of both food and wine can complement or enhance each other.</p>

        <h2>Understanding Mediterranean Flavors</h2>
        <p>Mediterranean cooking is characterized by the abundant use of olive oil, fresh herbs like basil and oregano, garlic, tomatoes, and citrus. These ingredients create dishes that are often bright, acidic, and aromatic - qualities that pair beautifully with the right wines.</p>

        <h2>Seafood and White Wines</h2>
        <p>The Mediterranean's proximity to the sea means seafood plays a starring role in the regional cuisine. For grilled fish with herbs, try a crisp Sauvignon Blanc or Vermentino. The wine's acidity will complement the fish's delicate flavors while the herbal notes will echo the seasoning.</p>

        <p>For richer seafood dishes like cioppino or bouillabaisse, consider a fuller-bodied white wine such as Chardonnay or white Rhône blends. These wines have the weight and complexity to stand up to the intense flavors of these traditional stews.</p>

        <h3>Recommended Pairings:</h3>
        <ul>
          <li>Grilled Sea Bass with Lemon → Albariño or Muscadet</li>
          <li>Seafood Risotto → Pinot Grigio or Soave</li>
          <li>Grilled Octopus → Rosé or light red wine</li>
        </ul>

        <h2>Meat Dishes and Red Wines</h2>
        <p>Mediterranean meat preparations often involve grilling, braising, or slow-roasting with aromatic herbs and spices. These robust cooking methods call for wines with enough structure and flavor intensity to complement the dishes.</p>

        <p>For grilled lamb with rosemary, a medium to full-bodied red wine like Côtes du Rhône or Sangiovese works wonderfully. The wine's earthy undertones and moderate tannins complement the meat's richness while harmonizing with the herb seasonings.</p>

        <h3>Classic Combinations:</h3>
        <ul>
          <li>Osso Buco → Barolo or Brunello di Montalcino</li>
          <li>Grilled Lamb → Châteauneuf-du-Pape or Grenache blends</li>
          <li>Beef Stew with Herbs → Tempranillo or Chianti Classico</li>
        </ul>

        <h2>Vegetarian Dishes</h2>
        <p>Mediterranean cuisine offers abundant vegetarian options, from ratatouille to stuffed vegetables to various pasta preparations. These dishes often feature tomatoes, eggplant, zucchini, and peppers - ingredients that pair well with both white and light red wines.</p>

        <p>For tomato-based dishes, choose wines with good acidity to match the tomatoes' natural tartness. Sangiovese, with its bright acidity and moderate tannins, is a classic choice. For herb-heavy vegetarian dishes, consider wines with herbal characteristics like Sauvignon Blanc or Loire Valley reds.</p>

        <h2>Cheese and Wine</h2>
        <p>No Mediterranean meal is complete without cheese, and the region produces some of the world's finest varieties. Fresh goat cheese pairs beautifully with Sancerre or other Sauvignon Blancs, while aged Pecorino Romano calls for a robust red wine like Aglianico or Nero d'Avola.</p>

        <h2>Dessert Pairings</h2>
        <p>Mediterranean desserts often feature nuts, honey, and citrus - flavors that pair wonderfully with dessert wines. Try pairing baklava with Moscato d'Asti, or fresh figs with Port. The key is to match the sweetness levels and complement the primary flavors.</p>

        <h2>General Pairing Principles</h2>
        <p>When pairing wine with Mediterranean cuisine, keep these guidelines in mind:</p>
        <ul>
          <li>Match the wine's intensity to the dish's intensity</li>
          <li>Consider complementary flavors (herbs, spices, cooking methods)</li>
          <li>Use acidity in wine to balance rich or fatty foods</li>
          <li>Don't forget about texture - light dishes with light wines, rich dishes with fuller-bodied wines</li>
        </ul>

        <p>Remember, the best pairing is ultimately the one you enjoy most. Use these guidelines as a starting point, but don't be afraid to experiment and discover your own favorite combinations. The joy of wine and food pairing lies in the exploration and discovery of new flavor experiences.</p>
      `
    }
  }

  const post = blogPosts[id] || blogPosts[1]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#F8F5F2] to-[#F4F1EE] pt-24 pb-16 sm:pt-28 sm:pb-20">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-16 w-96 h-96 bg-[#873942]/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.02, 0.08, 0.02]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute bottom-40 right-20 w-80 h-80 bg-[#2F5233]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate('/')}
          className="flex items-center space-x-2  hover:text-[#2F5233] transition-colors duration-200 mb-8"
        >
          <IoArrowBack className="w-5 h-5" />
          <span className="font-medium">Back to Stories</span>
        </motion.button>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-[#873942] text-white px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[nexa] text-[#873942] leading-tight mb-4"
              style={{ textShadow: '2px 2px 8px rgba(135, 57, 66, 0.2)' }}>
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-">
            <div className="flex items-center space-x-2">
              <IoPersonOutline className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IoCalendarOutline className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IoTimeOutline className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

        
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <div className="relative overflow-hidden rounded-xl h-[50%] w-[50%] shadow-xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          <div 
            className="text-gray-700 leading-relaxed"
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.8'
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>

     
      </div>
    </div>
  )
}

export default BlogPost