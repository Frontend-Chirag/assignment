import profile from '../../../public/profile.avif';
import image1 from  '../../../public/image_1.avif';
import image2 from  '../../../public/image_2.avif';
import image3 from  '../../../public/image_3.avif';
 
const data = [
 { 
   name:'Jordan',
   profileimage:profile,
   postimage:image1,
   description:'My First Post'
 },
 { 
  name:'Jordan',
  profileimage:profile,
  postimage:image2,
  description:'My second Post'
},
{ 
  name:'Jordan',
  profileimage:profile,
  postimage:image3,
  description:'My third Post'
}
];

export async function GET(res) {
  return new Response(JSON.stringify(data));
}