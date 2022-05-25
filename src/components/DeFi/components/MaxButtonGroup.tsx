import { Button, ButtonGroup } from '@chakra-ui/react'
import { Amount } from 'components/Amount/Amount'

type MaxButtonGroupProps = {
  options: number[]
  value?: number | null
  onClick: (args: number) => void
}

export const MaxButtonGroup: React.FC<MaxButtonGroupProps> = ({ options, value, onClick }) => {
  return (
    <ButtonGroup justifyContent='space-between' size='xs'>
      {options.map(option => (
        <Button isActive={option === value} key={option} onClick={() => onClick(option)}>
          {option === 1 ? (
            'Max'
          ) : (
            <Amount.Percent
              value={option}
              options={{
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }}
            />
          )}
        </Button>
      ))}
    </ButtonGroup>
  )
}
