import ReachedItem from "../../molecules/ReachedItem"

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
        <div className="container-fluid">
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                <ReachedItem result={'290M+'} title={'Players Top Up'} />
                <ReachedItem result={'12.500'} title={'Games Available'} />
                <ReachedItem result={'99,9%'} title={'Happy Players'} />
                <ReachedItem result={'4.7'} title={'Rating Worldwide'} />
            </div>
        </div>
    </section>
  )
}
