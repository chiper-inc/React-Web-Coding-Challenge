import { FiMap } from 'react-icons/fi/'

const SkeletonMap = () => {
	return (
		<figure className={'h-mid-screen w-full flex bg-slate-200 dark:bg-slate-700'}>
			<FiMap
				className={
					'w-4/5 h-auto md:w-auto md:h-4/5 m-auto text-slate-600 dark:text-slate-300 transition-colors ease-in-out' +
					' duration-500 animate-pulse'
				}
			/>
		</figure>
	)
}

export default SkeletonMap
