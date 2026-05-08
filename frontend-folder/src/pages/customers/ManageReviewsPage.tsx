import React from 'react';
import { Search, Settings, Bell, Home, ChevronRight, Star, Download, MoreVertical, ChevronDown, ChevronLeft } from 'lucide-react';

const reviews = [
  {
    id: 1,
    reviewer: { name: 'Abagael Drogan', email: 'abagarl@gmail.com', avatar: 'https://i.pravatar.cc/150?u=1' },
    product: { name: 'Air Jordan', desc: 'Air Jordan is a line of basketball shoes produced by Nike', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100' },
    rating: 4,
    date: 'Apr 20, 2024',
    comment: "My first and only mala ordered on Etsy, and I'm beyond delighted! I requested a custom mala based on two stones I was called to invite together in this kind of creation. The fun and genuine joy I invite together in this kind of creation. The fun and genuine joy."
  },
  {
    id: 2,
    reviewer: { name: 'Abagael Drogan', email: 'abagarl@gmail.com', avatar: 'https://i.pravatar.cc/150?u=2' },
    product: { name: 'Apple iPad', desc: '10.2-inch Retina Display, 64GB', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=100' },
    rating: 3,
    date: 'Apr 15, 2024',
    comment: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
  },
  {
    id: 3,
    reviewer: { name: 'Abagael Drogan', email: 'abagarl@gmail.com', avatar: 'https://i.pravatar.cc/150?u=3' },
    product: { name: 'Apple Watch Series 7', desc: 'Starlight Aluminum Case with Starlight Sport Band.', img: 'https://images.unsplash.com/photo-1546868871-70ca127447d9?w=100' },
    rating: 4,
    date: 'Apr 12, 2024',
    comment: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
  },
  {
    id: 4,
    reviewer: { name: 'Abagael Drogan', email: 'abagarl@gmail.com', avatar: 'https://i.pravatar.cc/150?u=4' },
    product: { name: 'Dohioue Wall Clock', desc: 'Modern 10 Inch Battery Operated Wall Clocks', img: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=100' },
    rating: 4,
    date: 'Apr 10, 2024',
    comment: "My first and only mala ordered on Etsy, and I'm beyond delighted! I requested a custom mala based on two stones I was called to invite together in this kind of creation. The fun and genuine joy I invite together in this kind of creation. The fun and genuine joy."
  }
];

const ManageReviewsPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#E6EDEF] min-h-[1824px] w-full max-w-[1920px] mx-auto animate-fade">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#E6EDEF]">
        <div className="relative w-[60%] max-w-[800px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input type="text" placeholder="search" className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border-none shadow-sm text-gray-600 focus:outline-none" />
        </div>
        <div className="flex items-center gap-4">
          <Settings size={20} className="text-[#00485A] cursor-pointer" />
          <Bell size={20} className="text-[#00485A] cursor-pointer" />
          <div className="w-10 h-10 rounded-full border-2 border-[#00485A] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="px-6 py-2">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[17px] text-[#00485A] font-normal mb-6">
          <span className="opacity-70">E-Commerce</span>
          <ChevronRight size={14} className="opacity-50" />
          <Home size={16} className="opacity-70" />
          <ChevronRight size={14} className="opacity-50" />
          <span>Manage Reviews</span>
        </div>

        {/* Statistics Cards */}
        <div className="flex gap-6 mb-8">
          <div className="flex-1 bg-white rounded-lg shadow-sm p-8 flex items-start justify-between">
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                 <h1 className="text-[42px] font-semibold text-[#00485A]">4.89</h1>
                 <Star className="text-[#00485A] fill-[#00485A]" size={26} />
               </div>
               <h3 className="text-[23px] font-medium text-[#00485A]">Total 187 reviews</h3>
               <p className="text-[20px] text-[#5B5B5B]">All reviews are from genuine customers</p>
               <span className="inline-block bg-[#00485A]/10 text-[#00485A] px-3 py-1 rounded text-[13px] font-semibold">+5 This Week</span>
            </div>
            
            <div className="w-[350px] space-y-3">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-4">
                  <div className="flex items-center gap-2 w-12">
                    <Star size={16} className="text-[#B5B5B5] fill-[#B5B5B5]" />
                    <span className="text-[21px] font-semibold text-[#00485A]">{star}</span>
                  </div>
                  <div className="flex-1 h-[8px] bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-[#00485A]`} style={{ width: star === 5 ? '85%' : star === 4 ? '60%' : star === 3 ? '40%' : star === 2 ? '20%' : '5%' }}></div>
                  </div>
                  <span className="text-[18px] text-[#5B5B5B] w-8">{star === 5 ? '124' : star === 4 ? '40' : star === 3 ? '12' : star === 2 ? '7' : '2'}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white rounded-lg shadow-sm p-8 flex">
            <div className="flex-1 space-y-4 border-r border-gray-200">
               <h3 className="text-[23px] font-medium text-[#00485A]">Reviews statistics</h3>
               <div className="flex items-center gap-3">
                 <span className="text-[19px] text-[#B5B5B5]">12 New reviews</span>
                 <span className="bg-[#1F9900]/10 text-[#1F9900] px-3 py-1 rounded text-[13px] font-semibold">+8.4%</span>
               </div>
               <p className="text-[23px] font-medium text-[#1F9900]">87% Positive reviews</p>
               <p className="text-[17px] text-[#B5B5B5]">Weekly Report</p>
            </div>
            <div className="flex-1 pl-8 flex flex-col justify-end">
               <div className="flex items-end justify-between h-[150px] px-4">
                 {[30, 50, 70, 100, 75, 50, 30].map((h, i) => (
                   <div key={i} className="flex flex-col items-center gap-3">
                      <div className={`w-[8px] rounded-t-full bg-[#00485A] ${i === 3 ? 'opacity-100' : 'opacity-20'}`} style={{ height: `${h}%` }}></div>
                      <span className="text-[18px] font-semibold text-[#00485A]">{['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>

        {/* Filters Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-[361px]">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00485A]" size={20} />
             <input type="text" placeholder="Search Review" className="w-full pl-12 pr-4 py-3 bg-transparent rounded border border-[#00485A] text-gray-600 focus:outline-none" />
          </div>
          <div className="flex items-center gap-4">
             <button className="flex items-center gap-2 border border-[#00485A] px-6 py-3 rounded text-[#00485A] font-medium text-[17px] shadow-sm">
               All <ChevronDown size={18} />
             </button>
             <button className="flex items-center gap-2 border border-[#00485A] px-6 py-3 rounded text-[#00485A] font-medium text-[17px] shadow-sm">
               <Download size={18} /> Export
             </button>
          </div>
        </div>

        {/* Review List Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0">
             <div className="flex items-center gap-4">
               <input type="checkbox" className="w-5 h-5 rounded border-gray-300" />
               <span className="text-[18px] font-medium text-gray-500">SELECT ALL</span>
             </div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {reviews.map((review) => (
              <div key={review.id} className="p-8 flex items-start gap-8">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 mt-2" />
                
                <div className="flex-1 flex gap-12">
                   {/* Reviewer & Product */}
                   <div className="w-[300px] space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-[60px] h-[60px] rounded-lg bg-[#00485A]/20 flex items-center justify-center overflow-hidden">
                           <img src={review.reviewer.avatar} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-[22px] font-medium text-[#00485A]">{review.reviewer.name}</p>
                          <p className="text-[17px] text-[#5B5B5B]">{review.reviewer.email}</p>
                          <span className="bg-[#1F9900]/10 text-[#1F9900] px-3 py-1 rounded text-[13px] font-semibold mt-1 inline-block">Published</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                        <div className="w-[67px] h-[67px] rounded shadow-sm overflow-hidden">
                           <img src={review.product.img} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-[19px] font-medium text-[#00485A]">{review.product.name}</p>
                          <p className="text-[17px] text-[#5B5B5B] line-clamp-2">{review.product.desc}</p>
                        </div>
                      </div>
                   </div>

                   {/* Rating & Content */}
                   <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={18} className={`${s <= review.rating ? 'text-[#FF9900] fill-[#FF9900]' : 'text-[#D9D9D9] fill-[#D9D9D9]'}`} />
                          ))}
                        </div>
                        <span className="text-[19px] font-medium text-[#1D1F2C]">{review.date}</span>
                      </div>
                      <p className="text-[19px] text-[#5B5B5B] leading-[22px] tracking-[0.01em]">
                        {review.comment}
                      </p>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="p-8 border-t border-gray-100 flex items-center justify-between text-[17px] text-[#A4A4A4]">
             <span>Showing 1 to 7 of 50 entries</span>
             <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                   <span>Items per page :</span>
                   <div className="flex items-center gap-2 border-b border-[#A4A4A4] px-2 py-1">
                      <span className="text-black font-medium">10</span>
                      <ChevronDown size={14} />
                   </div>
                </div>
                <span>1 - 10 of 16</span>
                <div className="flex items-center gap-4">
                   <ChevronLeft size={20} className="cursor-pointer" />
                   <ChevronRight size={20} className="text-[#00485A] cursor-pointer" />
                </div>
             </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 py-6 border-t border-gray-200 flex items-center justify-between text-[18px] text-[#3D3D3D]">
          <span>© 2024, made with ❤️ by Orbitwebtech</span>
          <div className="flex items-center gap-10">
            <span>License</span>
            <span>More Themes</span>
            <span>Documentation</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageReviewsPage;
