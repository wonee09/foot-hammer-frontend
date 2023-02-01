import { Wrapper } from './style';
import SmallRedButton from '../../components/buttons/ConfirmButton/ConfirmButton';
import TextInput from '../../components/inputs/TextInput';
import { useEffect, useState } from 'react';
import { db } from '../../common/firebase';
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';

function Main() {
  // 테스트 정보 타입
  type TestInfoType = {
    sampleData: string;
  };

  const [text, setText] = useState(''); // 테스트 정보 input 태그의 값
  const [fetchedData, setFetchedData] = useState([] as TestInfoType[]); // 화면로드 시 firebase에서 읽어들인 값

  // 제출 버튼 submit 핸들러
  const onTestInfoSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      alert('값을 입력해주세요!');
      return -1;
    }

    addTextAsync(text);
  };

  // firebase 호출 함수 정의
  const addTextAsync = async (newText: string) => {
    try {
      await addDoc(collection(db, 'testDb'), {
        sampleData: newText,
      });
      alert('데이터 입력이 정상 처리되었습니다.');
      setText('');
    } catch (err) {
      alert('데이터 입력이 실패했습니다. 콘솔 로그를 확인해주세요.');
      console.log('err', err);
    }
  };

  // 최초 화면 로드 시, firebase로부터 값을 읽어들임
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'testDb'));
      const docs = await getDocs(q);

      const tempArr: any[] = []; // 배열 안에 들어오는 타입은 제약이 없다(문자, 숫자, 불리언 모두 가능.)

      docs.forEach((item) => {
        tempArr.push({ ...item.data() });
      });

      setFetchedData([...tempArr]);
    };

    fetchData();
  }, []);

  // JSX
  return (
    <Wrapper>
      <form onSubmit={onTestInfoSubmitHandler}>
        <TextInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
          id="test"
          label="테스트 정보"
          value={text}
        />
        <SmallRedButton>제출</SmallRedButton>
      </form>
      <hr />
      <h4>입력된 데이터 목록입니다.</h4>
      {fetchedData.map((item, index) => {
        return (
          <ul key={index}>
            <li>
              {index}번째 데이터 : {item.sampleData}
            </li>
          </ul>
        );
      })}
    </Wrapper>
  );
}

export default Main;
