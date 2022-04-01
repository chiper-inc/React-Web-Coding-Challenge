import { Spinner, WrapperState } from "./Loading.styles"

export const Loading = () => {
  return (
    <WrapperState>
      <Spinner className="fa-solid fa-circle-notch"></Spinner>
    </WrapperState>
  )
}
