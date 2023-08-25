import SectionHeader from './sectionHeader';

export default function RecentPosts() {
  return (
    <section className='bg-blue-100 px-6'>
      <div className='grid grid-cols-2 gap-6'>
      <SectionHeader title='Recent posts' href='#' />
      </div>
    </section>
  );
}
