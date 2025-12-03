
import React, { use, useState } from 'react';
import ExpertCard from './ExpertCard';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Experts = () => {
    const {user} = use(AuthContext);
    // console.log(user);
    
    const [showAdvice, setShowAdvice] = useState(false);
    const [showConsultation, setShowConsultation] = useState(false);
      const handleConsultation = (e) =>{
            e.preventDefault()
            toast.success("Successfully Booked ")
            e.target.reset()
        }
     const plantCareAdvice = [
        "💧 Water plants when the top inch of soil is dry - overwatering is the #1 killer of houseplants!",
        "☀️ Most indoor plants need bright, indirect light. Avoid direct sunlight which can scorch leaves.",
        "🌱 Use well-draining soil and pots with drainage holes to prevent root rot.",
        "🍃 Clean plant leaves regularly with a damp cloth to help them breathe and photosynthesize better.",
        "🌿 Rotate your plants every few weeks to ensure even growth on all sides.",
        "⚠️ Watch for yellow leaves (overwatering) and brown tips (underwatering/low humidity).",
        "🌼 Fertilize during growing season (spring-summer) but reduce in fall and winter.",
        "🐛 Check regularly for pests like spider mites and mealybugs, especially under leaves."
    ]
    const experts = [
        {
            id: 1,
            name: "Dr. Sarah Chen",
            specialization: "Tropical Plants Specialist",
            experience: "12+ years",
            image: "https://cdn.pixabay.com/photo/2018/05/29/18/16/dr-3439566_1280.jpg",
            bio: "Expert in tropical plant care and indoor gardening. Specializes in Monstera, Fiddle Leaf Figs, and rare tropical species.",
            plantsCount: "5000+ plants cared for"
        },
        {
            id: 2,
            name: "Michael Rodriguez",
            specialization: "Succulent & Cactus Expert",
            experience: "8+ years",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
            bio: "Passionate about drought-resistant plants. Expert in succulent propagation and desert plant care.",
            plantsCount: "3000+ succulents nurtured"
        },
        {
            id: 3,
            name: "Emily Watson",
            specialization: "Air Purifying Plants Guru",
            experience: "10+ years",
            image: "https://media.istockphoto.com/id/144877289/photo/pretty-woman.jpg?s=2048x2048&w=is&k=20&c=etuz_x_PZbIPOEqEu8rnouQhc7O2rSHbSpxzHwbASRE=",
            bio: "NASA-certified air purifying plant expert. Specializes in plants that improve indoor air quality.",
            plantsCount: "4000+ air purifying plants"
        },
        {
            id: 4,
            name: "David Kim",
            specialization: "Bonsai Master",
            experience: "15+ years",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
            bio: "Traditional bonsai artist with international recognition. Expert in miniature tree cultivation and styling.",
            plantsCount: "1000+ bonsai trees shaped"
        }
    ];

    return (
        <section className="py-16 ">
       
            <div className="container mx-auto px-4">
                
                <div className="text-center mt-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Meet Our Green Experts
                    </h2>
                    <p className="mb-5 text-xl text-gray-600 max-w-2xl mx-auto">
                        Get professional advice from our team of plant care specialists with years of experience
                    </p>
                </div>
                
                 <Swiper
            loop={true}
            autoplay={{
                delay:1500,
                disableOnInteraction:false
            }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          slideShadows: true,
          scale: 0.75
        }}
        pagination={true}
        modules={[EffectCoverflow, 
            Autoplay,
            Pagination]}
        className="mySwiper"
      >
         {experts.map(expert => (
                <SwiperSlide>
                <ExpertCard key={expert.id} expert={expert} />
                </SwiperSlide>
                        
                    ))}
      </Swiper>
               
                {/* <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                   
                </div> */}

                
                <div className="text-center mt-12">
                    <div className=" rounded-2xl shadow-sm border border-gray-200 p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Need Personalized Plant Care Advice?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Our experts are here to help you with any plant care questions or issues you might have.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 
                    <button 
                    onClick={()=>setShowConsultation(!showConsultation)}
                    className="btn  btn-success cursor-pointer hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                       <span className='animate-pulse inline-block'> Book a Consultation</span>
                    </button>
                    
                  
                    <button 
                        onClick={() => setShowAdvice(!showAdvice)}
                        className="btn bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        {showAdvice ? 'Hide Plant Care Advice' : <span className='inline-block animate-bounce'>Let's see Our Plant Care Advice</span>}
                    </button>
                      </div>
                    </div>
                 {showAdvice ? (
    user ? (
        <div className=" w-10/12 mx-auto mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
            <h4 className="text-xl font-bold text-green-800 mb-4 ">
                🌿 Expert Plant Care Tips
            </h4>
            <div className="space-y-8 text-left">
                {plantCareAdvice.map((advice, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <span className="text-green-500 mt-1">•</span>
                        <p className="text-green-700">{advice}</p>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <p className="text-red-600 mt-4">You have to Log in for seeing our Expert tips</p>
    )
) : null}

                          {showConsultation ? (
    user ? (
        <div className="min-h-screen py-8">
    <h1 className='text-2xl md:text-3xl font-bold text-center mt-8 md:mt-8 mb-8'>Book Consultation</h1>
    <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl">
            <div className="card w-full max-w-md lg:max-w-2xl shadow-2xl bg-base-100">
                <div className="card-body p-4 sm:p-6 md:p-8">
                    <form onSubmit={handleConsultation}>
                        <fieldset className="fieldset space-y-4 w-full">
                           
                            <div className="form-control w-full">
                                <label className="label text-sm font-medium text-gray-700 mb-1">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            
                            <div className="form-control w-full">
                                <label className="label text-sm font-medium text-gray-700 mb-1">
                                    Consultation Time
                                </label>
                                <input
                                    name="consultationTime"
                                    type="datetime-local"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                           
                            <div className="form-control w-full">
                                <label className="label text-sm font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    className="textarea textarea-bordered w-full h-32 md:h-40"
                                    placeholder="Describe your plant issue or what advice you need . . ."
                                    required
                                ></textarea>
                            </div>

                            
                            <div className="form-control w-full mt-6">
                                <button className="btn bg-green-700 hover:bg-green-800 text-white w-full">
                                    Book Now
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    ) : (
        <p className="text-red-600 mt-4">You have to Log in for Booking our Consultation</p>
    )
) : null}


                </div>
            </div>
        </section>
    );
};

export default Experts;