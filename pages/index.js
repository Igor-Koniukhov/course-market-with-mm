import {Hero} from "@components/ui/common";
import {CourseList} from "@components/ui/course";
import {BaseLayout} from "@components/ui/layout";
import {getAllCourses} from "@components/../content/courses/fetcher";
import {useWeb3} from "@components/providers";

export default function Home({courses}) {
    const data = useWeb3()
    return (
        <BaseLayout>
            <Hero/>
            <CourseList courses={courses}/>
        </BaseLayout>
    )
}

export function getStaticProps(){
  const {data} = getAllCourses()
  return{
    props: {
      courses: data}
  }
}