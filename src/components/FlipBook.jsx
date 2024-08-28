import { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page = styled.div`
  background-color: #fafafa;
  border: 1px solid #c2c2c2;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FlipBook = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const updateCurrentPage = ({ data }) => {
    setCurrentPage(data);
  };

  return (
    <HTMLFlipBook
      width={550}
      height={733}
      size="stretch"
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1533}
      maxShadowOpacity={0}
    //   showCover={true}
      mobileScrollSupport={true}
      onFlip={updateCurrentPage}
      className="demo-book"
    >
      {images.map((image, index) => (
        <div key={index} className="page">
          <PageContainer>
            <Page>
              <Image src={image} alt={`Page ${index + 1}`} />
            </Page>
          </PageContainer>
        </div>
      ))}
    </HTMLFlipBook>
  );
};

export default FlipBook;