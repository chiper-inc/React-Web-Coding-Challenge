import { AiOutlinePicture } from 'react-icons/ai'

const SkeletonCardItem = () => (
	<article
		style={{ gridTemplateColumns: '12rem 1fr' }}
		className={
			'md:h-48 flex flex-col md:grid gap-x-4 p-3 odd:bg-gray-100 dark:odd:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors ease-in-out duration-500'
		}
	>
		<figure className={`w-full md:w-48 h-64 md:h-full flex text-center overflow-hidden`}>
			<AiOutlinePicture className={'w-4/5 h-4/5 text-slate-300 m-auto animate-pulse'} />
		</figure>
		<aside className={'flex flex-col gap-y-3'}>
			<span className={'w-1/2 h-6 bg-slate-300 rounded-sm animate-pulse'} />
			<article className={'flex-grow-2 inline-flex flex-col md:flex-row gap-y-3 md:gap-x-4'}>
				<aside className={'md:w-3/5 inline-flex flex-col gap-y-1'}>
					<div className={'md:w-3/5 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
					<div className={'md:w-3/5 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
					<div className={'md:w-3/5 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
					<div className={'md:w-3/5 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
					<div className={'md:w-3/5 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
					<div className={'w-1/2 md:w-1/3 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
				</aside>
				<aside className={'grid md:w-2/5'}>
					<strong className={'inline-flex flex-col gap-y-1'}>
						<div className={'w-3/5 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
						<div className={'w-3/5 h-3.5 bg-slate-300 rounded-sm animate-pulse'} />
					</strong>
				</aside>
			</article>
		</aside>
	</article>
)

export default SkeletonCardItem
