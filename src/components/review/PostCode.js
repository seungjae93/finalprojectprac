import React from "react";
import DaumPostcode from "react-daum-postcode";

const PostCode = () => {
  const handle = {
    selectAddress: (data: any) => {
      console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `);
    },
  };

  return (
    <div>
      <DaumPostcode
        onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
        autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
        defaultQuery="판교역로 235" // 팝업을 열때 기본적으로 입력되는 검색어
      />
    </div>
  );
};

export default PostCode;
