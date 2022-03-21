import { AiOutlinePicture } from 'react-icons/ai'

const SkeletonCardItem = () => (
	<article
		style={{ gridTemplateColumns: '12rem 1fr' }}
		className={'grid gap-x-4 p-3 odd:bg-gray-100 dark:odd:bg-slate-800 h-48'}
	>
		<figure className={`w-48 h-full text-center flex`}>
			<AiOutlinePicture className={'w-4/5 h-4/5 text-slate-300 m-auto animate-pulse'} />
		</figure>
		<aside className={'flex flex-col gap-y-4'}>
			<h1 className={''}>
				<div className={'w-1/2 h-6 bg-slate-300 rounded-sm animate-pulse'} />
			</h1>
			<article className={'inline-flex flex-col gap-y-1'}>
				<div className={'w-1/2 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
				<div className={'w-1/2 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
				<div className={'w-1/2 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
				<div className={'w-1/3 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
			</article>
			<strong className={'inline-flex flex-col gap-y-1'}>
				<div className={'w-1/3 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
				<div className={'w-1/3 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
			</strong>
		</aside>
	</article>
)

export default SkeletonCardItem
