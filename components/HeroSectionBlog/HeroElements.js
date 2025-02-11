import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 200px;
    position: relative;
    margin: 0 60px;

    :before {
        content: '',
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%),rgba(0,0,0,0.6) 100%),
        linear-gradient(100deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
` 

export const Imagem = styled.img`
    width: 100%;
    height: 500px;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
` 

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 760px) {
        font-size: 40px;
    }

    @media screen and (max-width: 400px) {
        font-size:32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 400px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 0px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 0px;
    font-size: 20px;
`