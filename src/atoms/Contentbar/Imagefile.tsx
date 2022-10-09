import { useSelector } from "react-redux";
import { ImgFile } from "../../styled/ImgFile.styled";
import { ImgLayout } from "../../styled/ImgLayout.styled";
import { LoadingStyled } from "../../styled/Loading.styled";

export default function Imagefile() {
  const src = useSelector((state: any) => state.imgReducer.imgFile);
  const isLoading = useSelector((state: any) => state.imgReducer.loading);

  if (isLoading) {
    return <LoadingStyled>Loading..</LoadingStyled>
  }

  return (
    <ImgLayout>
      <ImgFile src={src} alt="covid file" />
    </ImgLayout>
  );
}
