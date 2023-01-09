import React, { useState } from "react";
import styled from "styled-components";
import { useAddPost } from "../components/review/reviewApi";

import PostCode from "../components/review/PostCode";

const Review = () => {
  const [residence_type, setResidence_type] = useState("");
  const [deposit, setDeposit] = useState("");
  const [monthly_payment, setMonthly_payment] = useState("");
  const [acreage, setAcreage] = useState("");
  const [bug, setBug] = useState("");
  const [smell, setSmell] = useState("");
  const [floor_noise, setFloor_noise] = useState("");
  const [walls_noise, setWalls_noise] = useState("");
  const [town_noise, setTown_noise] = useState("");
  const [mold, setMold] = useState("");
  const [parking, setParking] = useState("");
  const [good, setGood] = useState("");
  const [bad, setBad] = useState("");
  const [star, setStar] = useState("");

  const [image, setImage] = useState([]);

  const { mutate: addPost } = useAddPost();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("residence_type", residence_type);
    formData.append("deposit", deposit);
    formData.append("monthly_payment", monthly_payment);
    formData.append("acreage", acreage);
    formData.append("bug", bug);
    formData.append("smell", smell);
    formData.append("floor_noise", floor_noise);
    formData.append("walls_noise", walls_noise);
    formData.append("town_noise", town_noise);
    formData.append("mold", mold);
    formData.append("parking", parking);
    formData.append("good", good);
    formData.append("bad", bad);
    formData.append("star", star);

    for (let i = 0; i < image.length; i++) {
      formData.append("images", image[i]);
    }

    //formData console 출력
    for (let value of formData.values()) {
      console.log(value);
    }

    const review = { formData };
    addPost(review);
  };

  return (
    <>
      <h1>후기를 작성하는 페이지 입니다</h1>
      <StContainer>
        <PostCode />

        <select
          name="residence_type"
          onChange={(e) => setResidence_type(e.target.value)}
        >
          <option value="투룸" checked>
            투룸
          </option>
          <option value="월세">월세</option>
        </select>

        <input
          type="number"
          name="deposit"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          placeholder="보증금 입력란입니다."
        />

        <input
          type="number"
          name="monthly_payment"
          value={monthly_payment}
          onChange={(e) => setMonthly_payment(e.target.value)}
          placeholder="월세 입력란입니다."
        />

        <div>
          <div>집 주인이 문제를 잘 해결해 주는지 평가</div>
          <input
            type="radio"
            name="acreage"
            value="1"
            onChange={(e) => setAcreage(e.target.value)}
          />
          1
          <input
            type="radio"
            name="acreage"
            value="2"
            onChange={(e) => setAcreage(e.target.value)}
          />
          2
          <input
            type="radio"
            name="acreage"
            value="3"
            onChange={(e) => setAcreage(e.target.value)}
          />
          3
          <input
            type="radio"
            name="acreage"
            value="4"
            onChange={(e) => setAcreage(e.target.value)}
          />
          4
          <input
            type="radio"
            name="acreage"
            value="5"
            onChange={(e) => setAcreage(e.target.value)}
          />
          5<div>벌래가 얼마나 자주 나오는지 평가</div>
          <input
            type="radio"
            name="bug"
            value="1"
            onChange={(e) => setBug(e.target.value)}
          />
          1
          <input
            type="radio"
            name="bug"
            value="2"
            onChange={(e) => setBug(e.target.value)}
          />
          2
          <input
            type="radio"
            name="bug"
            value="3"
            onChange={(e) => setBug(e.target.value)}
          />
          3
          <input
            type="radio"
            name="bug"
            value="4"
            onChange={(e) => setBug(e.target.value)}
          />
          4
          <input
            type="radio"
            name="bug"
            value="5"
            onChange={(e) => setBug(e.target.value)}
          />
          5<div>하수구에서 냄새가 얼마나 나는지 평가</div>
          <input
            type="radio"
            name="smell"
            value="1"
            onChange={(e) => setSmell(e.target.value)}
          />
          1
          <input
            type="radio"
            name="smell"
            value="2"
            onChange={(e) => setSmell(e.target.value)}
          />
          2
          <input
            type="radio"
            name="smell"
            value="3"
            onChange={(e) => setSmell(e.target.value)}
          />
          3
          <input
            type="radio"
            name="smell"
            value="4"
            onChange={(e) => setSmell(e.target.value)}
          />
          4
          <input
            type="radio"
            name="smell"
            value="5"
            onChange={(e) => setSmell(e.target.value)}
          />
          5<div>층간소음이 심한지 평가</div>
          <input
            type="radio"
            name="floor_noise"
            value="1"
            onChange={(e) => setFloor_noise(e.target.value)}
          />
          1
          <input
            type="radio"
            name="floor_noise"
            value="2"
            onChange={(e) => setFloor_noise(e.target.value)}
          />
          2
          <input
            type="radio"
            name="floor_noise"
            value="3"
            onChange={(e) => setFloor_noise(e.target.value)}
          />
          3
          <input
            type="radio"
            name="floor_noise"
            value="4"
            onChange={(e) => setFloor_noise(e.target.value)}
          />
          4
          <input
            type="radio"
            name="floor_noise"
            value="5"
            onChange={(e) => setFloor_noise(e.target.value)}
          />
          5<div>벽간소음이 심한지 평가</div>
          <input
            type="radio"
            name="walls_noise"
            value="1"
            onChange={(e) => setWalls_noise(e.target.value)}
          />
          1
          <input
            type="radio"
            name="walls_noise"
            value="2"
            onChange={(e) => setWalls_noise(e.target.value)}
          />
          2
          <input
            type="radio"
            name="walls_noise"
            value="3"
            onChange={(e) => setWalls_noise(e.target.value)}
          />
          3
          <input
            type="radio"
            name="walls_noise"
            value="4"
            onChange={(e) => setWalls_noise(e.target.value)}
          />
          4
          <input
            type="radio"
            name="walls_noise"
            value="5"
            onChange={(e) => setWalls_noise(e.target.value)}
          />
          5<div>거주지 주변 환경은 조용한지 평가</div>
          <input
            type="radio"
            name="town_noise"
            value="1"
            onChange={(e) => setTown_noise(e.target.value)}
          />
          1
          <input
            type="radio"
            name="town_noise"
            value="2"
            onChange={(e) => setTown_noise(e.target.value)}
          />
          2
          <input
            type="radio"
            name="town_noise"
            value="3"
            onChange={(e) => setTown_noise(e.target.value)}
          />
          3
          <input
            type="radio"
            name="town_noise"
            value="4"
            onChange={(e) => setTown_noise(e.target.value)}
          />
          4
          <input
            type="radio"
            name="town_noise"
            value="5"
            onChange={(e) => setTown_noise(e.target.value)}
          />
          5<div>결로나 곰팡이가 있는지 평가</div>
          <input
            type="radio"
            name="mold"
            value="1"
            onChange={(e) => setMold(e.target.value)}
          />
          1
          <input
            type="radio"
            name="mold"
            value="2"
            onChange={(e) => setMold(e.target.value)}
          />
          2
          <input
            type="radio"
            name="mold"
            value="3"
            onChange={(e) => setMold(e.target.value)}
          />
          3
          <input
            type="radio"
            name="mold"
            value="4"
            onChange={(e) => setMold(e.target.value)}
          />
          4
          <input
            type="radio"
            name="mold"
            value="5"
            onChange={(e) => setMold(e.target.value)}
          />
          5<div>주차는 편리한지 평가</div>
          <input
            type="radio"
            name="parking"
            value="1"
            onChange={(e) => setParking(e.target.value)}
          />
          1
          <input
            type="radio"
            name="parking"
            value="2"
            onChange={(e) => setParking(e.target.value)}
          />
          2
          <input
            type="radio"
            name="parking"
            value="3"
            onChange={(e) => setParking(e.target.value)}
          />
          3
          <input
            type="radio"
            name="parking"
            value="4"
            onChange={(e) => setParking(e.target.value)}
          />
          4
          <input
            type="radio"
            name="parking"
            value="5"
            onChange={(e) => setParking(e.target.value)}
          />
          5
        </div>

        <input
          type="text"
          name="good"
          value={good}
          onChange={(e) => setGood(e.target.value)}
          placeholder="장점을 적는 공간입니다"
        />
        <input
          type="text"
          name="good"
          value={bad}
          onChange={(e) => setBad(e.target.value)}
          placeholder="단점을 적는 공간입니다"
        />

        <div>--사진업로드--</div>
        <input
          multiple
          name="reviewImage"
          accept="image/*"
          type="file"
          onChange={(e) => setImage([...e.target.files])}
        />

        <select name="star" onChange={(e) => setStar(e.target.value)}>
          <option value="">별점을 선택해 주세요</option>
          <option value="1">*</option>
          <option value="2">**</option>
          <option value="3">***</option>
          <option value="4">****</option>
          <option value="5">*****</option>
        </select>

        <button onClick={onSubmitHandler}>후기 제출</button>
      </StContainer>
    </>
  );
};

export default Review;

const StContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
