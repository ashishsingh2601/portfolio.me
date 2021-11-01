import React, {useState} from 'react';
import {Card, Modal, Carousel, Button} from 'antd';
import './Product.css';


const { Meta } = Card;

const Product = ({img, link, title, desc}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    const contentStyle = {
  height: '300px',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
//   backgroundImage: url({img}),
};

    return (
       <> 
            <Card
            hoverable
            style={{ width: 240 }}
            // cover={<img alt="example" src='./images/assetchain-ss.png' />}
                >
            <Meta title={title} description={desc} />
            <button className="live-link-button"><a href={link}>Live Link</a></button>
            <button className="show-images-button" onClick={showModal}>See Images</button>
            </Card>
            <Modal className="modal-styles" title={title} centered visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Carousel autoplay>
                        <div>
                        <h3 style={contentStyle}>
                            <img src={img} alt="Project Snap"/>
                        </h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
            </Modal>
        </>
    )
}

export default Product
