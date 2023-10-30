import {
  Button,
  Divider,
  Input,
  Modal,
  Select,
  SelectProps,
  Upload,
  UploadFile,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { RcFile } from 'antd/es/upload';
import { UploadProps } from 'antd/lib';
import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//페이지 전체 데이터 타입
interface AllProfileValueProps {
  fileList: UploadFile[];
  nickname: string;
  selectOptionValue: never[];
  githubValue: string;
  blogValue: string;
  websiteValue: string;
  instagramValue: string;
  introduceValue: string;
}
// 리듀서 데이터 타입
interface ReducerDataProps {
  profileData: AllProfileValueProps;
  updateProfileData: React.Dispatch<any>;
}
interface PlusListReducerDataProps extends ReducerDataProps {
  list: string;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

//옵션 리스트
const options: SelectProps['options'] = [
  {
    label: 'Github',
    value: 'github',
  },
  {
    label: 'Blog',
    value: 'blog',
  },
  {
    label: 'My website',
    value: 'website',
  },
  {
    label: 'Instagram',
    value: 'instagram',
  },
  {
    label: '자기 소개',
    value: 'introduce',
  },
];

//기본 프로필
const DefaultProfile = ({
  profileData,
  updateProfileData,
}: ReducerDataProps) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  //이미지 등록
  const UploadImage: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    updateProfileData({ ...profileData, fileList: newFileList });
  };
  //프리뷰
  const activePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
    );
  };
  const cancelPreview = () => setPreviewOpen(false);
  //닉네임 작성
  const writeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateProfileData({ ...profileData, nickname: e.target.value });
  };

  return (
    //레이아웃
    <div
      className='defaultInfoWrap'
      style={{
        margin: '56px 0',
      }}
    >
      <h2>기본 프로필</h2>
      {/* 프로필 이미지 */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 10 }}>프로필 이미지</div>
        <Upload
          accept='image/png, image/jpeg' //png, jpeg, jpg만 보이도록
          action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
          listType='picture-circle'
          fileList={profileData.fileList}
          onChange={UploadImage}
          onPreview={activePreview}
        >
          {profileData.fileList.length ? null : (
            <div>
              <div>Upload</div>
            </div>
          )}
        </Upload>
        {/* 프리뷰 모달 */}
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={cancelPreview}
        >
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
      {/* 닉네임 */}
      <div>
        <div style={{ marginBottom: 10 }}>닉네임</div>
        <Input
          value={profileData.nickname}
          onChange={writeNickName}
          style={{ width: 200, height: 32 }}
        />
      </div>
    </div>
  );
};

//옵션 리스트
const OptionList = ({
  profileData,
  updateProfileData,
  list,
}: PlusListReducerDataProps) => {
  //해당 옵션 객체
  const target = options?.find((optionsList) => optionsList.value === list);

  //옵션 정리
  const targetValue = () => {
    switch (list) {
      case 'github':
        return profileData.githubValue;
      case 'blog':
        return profileData.blogValue;
      case 'website':
        return profileData.websiteValue;
      case 'instagram':
        return profileData.instagramValue;
    }
  };
  const targetSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (list) {
      case 'github':
        return updateProfileData({
          ...profileData,
          githubValue: e.target.value,
        });
      case 'blog':
        return updateProfileData({
          ...profileData,
          blogValue: e.target.value,
        });
      case 'website':
        return updateProfileData({
          ...profileData,
          websiteValue: e.target.value,
        });
      case 'instagram':
        return updateProfileData({
          ...profileData,
          instagramValue: e.target.value,
        });
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label
        style={{
          width: 100,
          display: 'block',
          marginBottom: 10,
        }}
      >
        {target?.label}
      </label>
      {list === 'introduce' ? (
        <TextArea
          rows={4}
          placeholder='자기 소개'
          style={{
            resize: 'none',
            width: '100%',
            marginBottom: 20,
          }}
          value={profileData.introduceValue}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            updateProfileData({
              ...profileData,
              introduceValue: e.target.value,
            })
          }
          maxLength={500}
          showCount
        />
      ) : (
        <Input
          style={{
            width: '100%',
          }}
          value={targetValue()}
          onChange={(e) => targetSetValue(e)}
          placeholder='url'
        />
      )}
    </div>
  );
};

// 기타 프로필
const OptionProfile = ({
  profileData,
  updateProfileData,
}: ReducerDataProps) => {
  return (
    <div
      className='otherProfileWrap'
      style={{
        margin: '56px 0',
      }}
    >
      <h2>옵션 프로필</h2>
      <div style={{ width: 600 }}>
        <Select
          mode='multiple'
          allowClear
          style={{ width: '100%', marginBottom: '20px' }}
          value={profileData.selectOptionValue}
          placement={'topLeft'} // 드롭다운 뜨는 위치
          onChange={(e) => {
            updateProfileData({ ...profileData, selectOptionValue: e });
          }}
          placeholder='추가로 입력할 정보를 선택해주세요'
          options={options}
        />
        {profileData.selectOptionValue.length !== 0
          ? profileData.selectOptionValue.map((list: any) => {
              return (
                <OptionList
                  key={list}
                  profileData={profileData}
                  updateProfileData={updateProfileData}
                  list={list}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

//컨테이너
export const ProfileContainer = () => {
  const navigate = useNavigate();
  // --------------------------------------------------------------------------
  //페이지 전체 데이터 관리
  //크리에이터
  const createdAction = (prev: any, next: any) => {
    return { ...prev, ...next };
  };
  //초기값
  const allProfileValue: AllProfileValueProps = {
    fileList: [],
    nickname: '',
    selectOptionValue: [],
    githubValue: '',
    blogValue: '',
    websiteValue: '',
    instagramValue: '',
    introduceValue: '',
  };
  //리듀서
  const [profileData, updateProfileData] = useReducer(
    createdAction,
    allProfileValue
  );
  // --------------------------------------------------------------------------

  //현재 상태 저장 버튼
  const saveNowProfile = () => {
    //저장 api 호출
    console.log(profileData);

    //로딩 후 저장과 함께 메인 페이지(현재는 구현 위해 프로필 페이지)로
    alert(`저장되었습니다.`);
    navigate('/profile');
  };

  return (
    //임시 레이아웃
    <div
      className='layout'
      style={{
        width: 1100,
        minHeight: `100vh`,
        margin: '56px auto',
      }}
    >
      <div
        className='profileHeader'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ marginBottom: 20 }}>프로필 설정</h1>

        {/* 총 저장버튼 */}
        <Button onClick={saveNowProfile}>저장</Button>
      </div>

      {/* 기본 프로필 */}
      <DefaultProfile
        profileData={profileData}
        updateProfileData={updateProfileData}
      />

      {/* 구분선 */}
      <Divider />

      {/* 옵션 프로필 */}
      <OptionProfile
        profileData={profileData}
        updateProfileData={updateProfileData}
      />
    </div>
  );
};
