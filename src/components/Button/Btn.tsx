import React from 'react';
import './Btn.scss'

export interface BtnProps {
  label?: string;
  display?: 'block' | 'inline-block';
  color?: 'blue' | 'white'
  href?: string;
  fn?: () => void;
  target?: string;
}

const Btn: React.FC<BtnProps> = ({label = 'Bouton', color = 'blue', display = 'inline-block', href, fn, target = '_self'}) => {
  return (
    <>
        {
          href && <a className={`btn ${display && display === 'block' ? 'block' : ''} ${color}`} href={href} target={target}>{label}</a>
        }
        {
          fn && <button type="button" className={`btn ${display && display === 'block' ? 'block' : ''} ${color}`} onClick={fn}>{label}</button>
        }
    </>
  )
}

export default Btn