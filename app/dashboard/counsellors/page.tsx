import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { BsChatRightDotsFill } from "react-icons/bs";
import { RiContactsBook3Fill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import Image from "next/image";
import DashboardHeader from '@/app/components/DashboardHeader';

interface Profile {
  id: number;
  name: string;
  title: string;
  image: string;
  about: string;
  therapy: string[];
  specials: string[];
}

const profiles: Profile[] = [
  {
    id: 1,
    name: 'Mrs. Victoria De-Graft Adjei',
    title: 'Counselling Psychologist - Head of Centre',
    image: '/Victoria.jpg',
    about: 'Mrs. De-Graft Adjei is passionate about the psychosocial development of the youth and has also been involved in the training of some members of the university community (staff and students) and staff of other institutions as para counselling professionals. Mrs. De-Graft Adjei is a seasoned Counselling Psychologist with rich experience in psychological/emotional counselling, psychosocial counselling and dynamics of Communication, Individual & Group Counselling as well as Health Promotion/Education.',
    therapy: ['Depression', 'Anxiety', 'Anger'],
    specials: ['Depression', 'Anxiety']
  },
  {
    id: 2,
    name: 'Dr. Mrs. Elizabeth Anokyewaa Sarfo Fordjour',
    title: 'Clinical Psychologist - Counsellor, College of Engineering',
    image: '/Elizabeth.jpg',
    about: 'Elizabeth Anokyewaa Sarfo Fordjour, PhD, is a Counsellor at the KNUST Counselling Centre. She is a Licensed Clinical Psychologist with the Ghana Psychological Council (GPC) and a member of the American Psychological Association (International Affiliate). She has experience working with adolescents and young adults and in helping them deal with various mental health issues. Elizabeth is currently the Counsellor for the College of Engineering, KNUST. Her research interests focus broadly on the psychological wellbeing of adolescents and young adults; religion and mental health, African psychology. She is also interested in issues on gender and women empowerment.',
    therapy: ['Relationship', 'Self Confidence', 'Grief and Loss'],
    specials: ['Relationship', 'Grief and Loss', 'More']
  },
  {
    id: 3,
    name: 'Mr. Joseph Asamoah-Gyawu',
    title: 'Counselling Psychologist - Counsellor, Institute of Distance Learning',
    image: '/Joseph.jpg',
    about: 'Mr. Joseph Asamoah-Gyawu, is a Licensed Counselling Psychologist with a wide-range of experience in Career Guidance, Educational/Academic Counselling, Job Placement and Vocational Counselling, School counselling, Substance abuse, HIV, Behavior Modification, Psychosocial Counselling, Students personnel services and many other areas in Counselling Psychology and higher Education.',
    therapy: ['Substance Abuse', 'Stress Management', 'Anxiety'],
    specials: ['Anxiety', 'More']
  },
  {
    id: 4,
    name: 'Mrs. Bernice Serwaa Ofosuhene Peasah',
    title: 'Counselling Psychologist - Counsellor, College of Science',
    image: '/Peasah.jpg',
    about: 'She has a sound knowledge of theoretical counselling approaches and their application to real world setting, having a special interest in cognitive behavioral therapy, integrative and youth counselling, relational/marriage counselling, preventive, risk management and addiction therapy. In addition, she has competencies in crisis intervention/management, grief counselling and psychological assessment (psychometric measures).',
    therapy: ['CBT', 'Addictions', 'Grief and Loss'],
    specials: ['Cognitive Behavioral Therapy']
  },
  {
    id: 5,
    name: 'Mr. Gilbert Konwie Langu',
    title: 'Counselling Psychologist - Counsellor, College of Art and Built Environment',
    image: '/Gilbert.jpg',
    about: 'Mr. Gilbert Konwie Langu, is a Licensed Counselling Psychologist with a wide-range of experience in Educational/Academic counselling, Career Development and Adjustment, and Vocational counselling and Students Personal Services. He is an Assistant Counsellor at the KNUST Counselling Centre (KCC).He is interested in Youth Mentorship and Development in the areas of Gender, Women and Youth Empowerment, Psycho-Education and Advocacy, Training and Community Services.',
    therapy: ['Career Development', 'Crises Management', 'Grief and Loss'],
    specials: ['Psychological/Emotional counselling']
  }, 
  {
    id: 6,
    name: 'Mr. Rabbi Darko',
    title: 'Counselling Psychologist - Counsellor, College of Humanities and Social Sciences',
    image: '/Rabbi.jpg',
    about: 'Mr. Rabbi Darko is a Licensed Counselling Psychologist and registered with the following international professional bodies: Ghana Psychological Council (GPC), America Psychological Association (International Affiliate) and Ghana National Association of Certified Counsellors (GNACC). He has varied experiences in Career Counselling, Behavioural Modification, Child Counselling, Development Counselling, Educational Counselling and Marriage Counselling.',
    therapy: ['Career Development', 'Behavioural Modification', 'Educational Counselling'],
    specials: ['Behavioural Modification']
  },
  {
    id: 7,
    name: 'Ms. Joana Joseline Hackman',
    title: 'Counselling Psychologist - Counsellor, College of Health Sciences',
    image: '/Joana.jpg',
    about: 'Ms. Joana Joseline Hackman, a Junior Assistant Counsellor at the KNUST Counselling Center (KCC), holds a BA Publishing Studies degree from Kwame Nkrumah University of Science and Technology in 2004 and obtained an MEd Guidance and Counselling from the University of Cape Coast in 2015.',
    therapy: ['Career Development', 'Behavioural Modification', 'Educational Counselling'],
    specials: ['Behavioural Modification']
  },
  {
    id: 8,
    name: 'Ms. Akua Afriyie Addae',
    title: 'Clinical Psychologist - Counsellor, College of Agric & Natural Resources and Coordinator, Training & Outreach',
    image: '/Akua.jpg',
    about: 'Ms Addae has close to fifteen years experience of providing psychological services to clients of various backgrounds. She is an expert in various areas of mental health, such as anxiety, depression and relationship problems. She is particularly interested in working with young people in the areas of self-esteem building and addiction (substance or drug, pornography and gambling), as well as career choices and study skills. She is also particularly interested in palliative care (for the terminally ill and their families), trauma and grief therapy.',
    therapy: ['Cognitive- Behaviour Therapy', 'Depression', 'Grief Therapy'],
    specials: ['Child and adolescent Mental Health']
  },
  {
    id: 9,
    name: 'Mr. Cosmos Osei Okyere',
    title: 'Counselling Psychologist - Coordinator, Peer Counselling',
    image: '/Cosmos.jpg',
    about: 'Offers comprehensive support for students, helping them navigate through relationship issues, substance abuse, and anxiety.',
    therapy: ['Anxiety', 'Depression', 'Relationships'],
    specials: ['Peer Counselling']
  },
  {
    id: 10,
    name: 'Ms. Joan Soribang',
    title: 'Clinical Psychologist - Coordinator, Psychoeducation & Emotional Health Awareness Promotion',
    image: '/Joan.jpg',
    about: 'Offers comprehensive support for students, helping them navigate through relationship issues, substance abuse, and anxiety.',
    therapy: ['Psychology', 'Health education and promotion'],
    specials: ['Peer Counselling']
  },
  {
    id: 11,
    name: 'Ms. Hajara Baba',
    title: 'Clinical Psychologist - Coordinator, Research',
    image: '/Hajara.jpg',
    about: 'Offers comprehensive support for students, helping them navigate through relationship issues, anxiety, and depression.',
    therapy: ['Psychology', 'Peer counselling'],
    specials: ['Peer Counselling']
  },
  {
    id: 12,
    name: 'Mr. Stephen Ofori',
    title: 'Counselling Psychologist - Counsellor, Obuasi Campus',
    image: '/Stephen.jpg',
    about: 'Offers comprehensive support for students, helping them navigate through relationship issues, anxiety, and depression.',
    therapy: ['Psychology', 'Peer counselling'],
    specials: ['Peer Counselling']
  }
  

];

interface InfoCardProps {
  profile: Profile;
}

const InfoCard: React.FC<InfoCardProps> = ({ profile }) => (
  <div className='w-full md:w-2/3 shadow-lg h-auto m-4 flex rounded-md bg-white border-2 border-gray-200'>
    <div className='flex-1 p-4'>
      <div className="bg-blue-500 rounded-full w-36 h-36 mb-6 flex items-center justify-center text-white">
        <Image
                src={profile.image}
                alt="profile image of counsellor"
                className='w-full md:w-[550px] mx-auto my-4 object-fill'
                width={550} // Set the desired width
                height={412} // Set the desired height while maintaining the aspect ratio
            />
        </div>
      <div className="flex gap-4 items-center m-4">
        <RiContactsBook3Fill className="text-blue-500 w-6 h-6 cursor-pointer" />
        <IoCall className="text-blue-500 w-5 h-5 cursor-pointer" />
        <BsChatRightDotsFill className="text-blue-500 w-5 h-5 cursor-pointer" />
      </div>
      <div>
        <span className='border-2 border-blue-500 w-auto flex justify-center items-center rounded-md m-2 font-semibold cursor-pointer'>Appointment</span>
      </div>
    </div>
    <div className='flex-2 p-4'>
      <h2 className='font-bold text-xl mb-2'>{profile.name}</h2>
      <h2 className='font-semibold text-base text-gray-500 my-2'>{profile.title}</h2>
      <p className='my-2'>{profile.about}</p>
      <div className='mt-8'>
        <h2 className='font-semibold'>Therapies offered:</h2>
        <ul className='flex flex-row gap-4 flex-wrap'>
          {profile.therapy.map((item, index) => (
            <li key={index} className='border-2 border-gray-200 w-auto flex justify-center items-center rounded-md m-2 p-2 font-semibold'>{item}</li>
          ))}
        </ul>
      </div>
      <div className='mt-8'>
        <h2 className='font-semibold'>Top Specialties:</h2>
        <ul className='flex flex-row gap-4 flex-wrap'>
          {profile.specials.map((item, index) => (
            <li key={index} className='border-2 border-gray-200 w-auto flex justify-center items-center rounded-md m-2 p-2 font-semibold'>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Page: React.FC = () => (
  <div>
    <DashboardHeader />
    <div className='max-w-full mx-auto grid md:grid-cols-2 mt-6'>
      <h2 className='font-bold text-2xl'>Find your counselor</h2>
      <div className='flex flex-col justify-center md:text-left md:items-start'>
        <div className="relative md:w-[400px] sm:w-auto">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search counsellor's name"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
        </div>
      </div>
    </div>

    <div className='max-w-full h-auto grid justify-center grid-cols-1 items-center mt-6 p-2 place-items-center'>
      {profiles.map(profile => (
        <InfoCard key={profile.id} profile={profile} />
      ))}
    </div>
  </div>
);

export default Page;
