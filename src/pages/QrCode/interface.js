import React from "react";
import { px2rem } from "@/utils/commonUtils";

import LinkIcon from '@/assets/icons/link.svg';
import LinkIconActive from '@/assets/icons/link_green.svg';
import TextIcon from '@/assets/icons/text.svg';
import TextIconActive from '@/assets/icons/text_green.svg';
import WrongIcon from '@/assets/icons/wrong.svg';

import QrcodeIcon1 from './assets/qrcodeIcon1.svg';

// 选择二维码内容类型
export const QrCodeOptions = [
  {
    index: 0,
    value: 'Text',
    label: 'Text',
    icon: <TextIcon />,
    iconActive: <TextIconActive />
  },
  {
    index: 1,
    value: 'Link',
    label: 'Link',
    icon: <LinkIcon />,
    iconActive: <LinkIconActive />
  },
  {
    index: 3,
    value: 'Phone',
    label: 'Phone',
    icon: <LinkIcon />,
    iconActive: <LinkIconActive />
  },
  {
    index: 4,
    value: 'Email',
    label: 'Email'
  }
]

export const DesignTabs = [
  {
    index: 0,
    label: 'Frame',
    value: 'Frame'
  }, {
    index: 1,
    label: 'Style',
    value: 'Style'
  }
]

export const FrameStyles = [
  {
    index: 0,
    label: 'None',
    value: 'None',
    icon: <WrongIcon width={px2rem(35)} height={px2rem(35)} />
  }, {
    index: 1,
    label: 'bottom',
    value: 'bottom',
    icon: <QrcodeIcon1 width={px2rem(35)} height={px2rem(40)} />
  }
]