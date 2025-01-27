import './styles.css';
import { BoxInfo, ContentContainer, Image, Text } from './styles';
import Example1 from '../../assets/avatar.jpg';
import Example2 from '../../assets/logo.jpg';


function Lesson08() {
    const textStyles = {
        color: 'blue',
        fontSize: '26px'
    };
    return (
        <div className='lesson08-wrapper'>
            <div style={{ color: 'blueviolet', fontSize: '24px' }}>Inline style example 1</div>
            <p>Inline style example 2</p>
            <div style={textStyles}>Inline style example 3</div>
            {/* ===emotion=== */}
            <BoxInfo primary>
                <ContentContainer>
                    <Image src={Example1} />
                    <Text>Emotion example</Text>
                </ContentContainer>
            </BoxInfo>
            <BoxInfo>
                <ContentContainer>
                    <Image src={Example2} />
                    <Text>Emotion example</Text>
                </ContentContainer>
            </BoxInfo>
        </div>
    );
}
export default Lesson08;