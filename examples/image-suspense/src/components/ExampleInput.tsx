import { Image } from 'react-image-suspense'

export const ExampleInput = () => {
  return (
    // <div className="flex items-center p-5 rounded-md shadow-md">
    <div className="example__card">
      <Image
        width={50}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
        className="example__avatar"
      />

      <input
        type="text"
        className="example__input"
        placeholder="이름을 입력해주세요"
      />
    </div>
  )
}

// display: flex;
// align-items: center;
// padding: 24px;
// border-radius: 8px;
// background-color: #fff;
// box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);

// const UserInput = ({ userResource }: any) => {
//   const user = userResource.read();

//   return (
//     <div className="example__card">
//       <Img src={user.avatarUrl} className="example__avatar" />

//       <input
//         type="text"
//         className="example__input"
//         placeholder={`What's on your mind ${user.name}?`}
//       />
//     </div>
//   );
// };
