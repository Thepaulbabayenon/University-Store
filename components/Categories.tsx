'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiArchiveResearch,
  GiIsland,
  GiShirt,
  GiNotebook,
  GiPapers,
  GiPencilBrush,
  GiWindmill,
  GiSwapBag
} from 'react-icons/gi';
import { FaSkiing, FaChild } from 'react-icons/fa';
import { SiMicrosoftacademic, SiBookstack } from "react-icons/si";
import { BsSnow } from 'react-icons/bs';
import { RiQuillPenFill } from "react-icons/ri";
import { IoDiamond } from 'react-icons/io5';
import { IoIosMan, IoIosWoman } from "react-icons/io";
import { MdOutlineVilla, MdSportsTennis } from 'react-icons/md';
import CategoryBox from "./CategoryBox";
import Container from './Container';


export const categories = [
  {
    label: 'Academic',
    icon: SiMicrosoftacademic,
    description: 'This property is for academic!',
  },
  {
    label: 'Books',
    icon: SiBookstack,
    description: 'This property is for book items!',
  },
  {
    label: 'Children',
    icon: FaChild,
    description: 'This property for children!',
  },
  {
    label: 'Coloring Materials',
    icon: GiPencilBrush,
    description: 'This property is for coloring materials!'
  },
  {
    label: 'Mens',
    icon: IoIosMan,
    description: 'This property is for men!'
  },
  {
    label: 'Notebooks',
    icon: GiNotebook,
    description: 'This is property is for notebooks!'
  },
  {
    label: 'Papers',
    icon: GiPapers,
    description: 'This property is for papers!'
  },
  {
    label: 'Research',
    icon: GiArchiveResearch,
    description: 'This property is for research!'
  },
  {
    label: 'School Uniform',
    icon: GiShirt,
    description: 'This property is for school clothing!'
  },
  {
    label: 'School Items',
    icon: GiSwapBag,
    description: 'This property is for school items!'
  },
  {
    label: 'Sports',
    icon: MdSportsTennis,
    description: 'This property is for sports!'
  },
  {
    label: 'Womens',
    icon: IoIosWoman,
    description: 'This property for womens!'
  },
  {
    label: 'Writing Materials',
    icon: RiQuillPenFill,
    description: 'This property is for writing materials!'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;