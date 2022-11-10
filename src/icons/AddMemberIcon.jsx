const AddMemberIcon = ({ clickHandler }) => {
  return (
    <svg
      onClick={clickHandler}
      width='44'
      height='36'
      viewBox='0 0 44 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22 12L22 24'
        stroke='#CCD2E3'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M28 18L16 18'
        stroke='#CCD2E3'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <rect
        x='0.5'
        y='0.5'
        width='43'
        height='35'
        rx='3.5'
        stroke='#AAB4BD'
        strokeDasharray='4 4'
      />
    </svg>
  )
}

export default AddMemberIcon
