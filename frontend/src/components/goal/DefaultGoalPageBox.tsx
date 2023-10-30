import styled from 'styled-components';
import { ProfileBox } from './ProfileBox';
import { CalendarChartBox } from './CalendarChartBox';
import { ContainerBox } from 'components/common';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Breadcrumb, theme } from 'antd';

type DefaultGoalPageProps = {
  children: React.ReactNode;
  CalenderData?: {
    date: string;
    goals: string[];
  }[];
};

export const DefaultGoalPageBox = ({
  children,
  CalenderData,
}: DefaultGoalPageProps) => {
  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathnameArr = pathname.split('/').splice(2);
  const breadCrumbArr = [];
  for (let i = 0; i < pathnameArr.length; i++) {
    const LastIdx = pathnameArr.length - 1;
    const navigateIdx = -(LastIdx - i);
    const newItems = {
      title: (
        <StyledBreadCrumb
          $navigateidx={navigateIdx}
          role='presentation'
          onClick={() => navigateIdx && navigate(navigateIdx)}
        >
          {pathnameArr[i]}
        </StyledBreadCrumb>
      ),
    };
    breadCrumbArr.push(newItems);
  }
  const { token } = theme.useToken();

  const Comp = useRef<HTMLDivElement>(null);
  const scroll = 300;

  //메인 컴포넌트까지 스크롤
  useEffect(() => {
    if (params.goalId) {
      Comp.current?.scrollTo({ top: scroll });
    }
  }, [params]);

  return (
    <Wrap>
      {/* 프로필 */}
      <ProfileBox />
      <ContentWrap ref={Comp} $scrollcolor={token.colorPrimary}>
        {/* 캘린더 차트 */}
        {CalenderData && <CalendarChartBox data={CalenderData} />}

        <ContainerBox $outline='shadow'>
          <div>
            {/* 게시글 id가 있을 경우만 이전 버튼 생성 */}
            {params.goalId && (
              <div style={{ margin: '10px 0' }}>
                <Breadcrumb items={breadCrumbArr} />
              </div>
            )}
            {children}
          </div>
        </ContainerBox>
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
`;
const ContentWrap = styled.div<{ $scrollcolor: string }>`
  width: 100%;
  height: 80vh;
  overflow-y: scroll;
  padding-right: 15px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ $scrollcolor }) => `${$scrollcolor}`};
    border-radius: 5px;
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledBreadCrumb = styled.div<{ $navigateidx: number }>`
  cursor: ${({ $navigateidx }) => $navigateidx && 'pointer'};
`;
