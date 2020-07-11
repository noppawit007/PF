import T2 from './test2'
import T3 from './test3'

const test1 = () => {
    const name = 'jk'
    const surname = 'gj'

  return (
    <div>
        {''}
      test : {name}-{surname}
      <T2 
        name={name} 

        surname={surname} />
        jfsjf===============
        <T3 n="xxx" />
    </div>
  )
}
export default test1