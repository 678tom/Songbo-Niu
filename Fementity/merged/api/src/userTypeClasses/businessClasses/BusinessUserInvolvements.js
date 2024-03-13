class BusinessUserInvolvements {
    constructor(submitCourse, podcastYoutubeGuest, workshop, events, couponCode, submitBlog) {
        this._submitCourse = submitCourse;
        this._podcastYoutubeGuest = podcastYoutubeGuest;
        this._workshop = workshop;
        this._events = events;
        this._couponCode = couponCode;
        this._submitBlog = submitBlog;
    }

    get submitCourse() {
        return this._submitCourse;
    }

    get podcastYoutubeGuest() {
        return this._podcastYoutubeGuest;
    }

    get workshop() {
        return this._workshop;
    }

    get events() {
        return this._events;
    }

    get couponCode() {
        return this._couponCode;
    }

    get submitBlog() {
        return this._submitBlog;
    }

    toggleSubmitCourse(){
        this._submitCourse = !(this._submitCourse);
    }

    togglePodcastYoutubeGuest(){
        this._podcastYoutubeGuest = !(this._podcastYoutubeGuest);
    }
    toggleWorkshop(){
        this._workshop = !(this._workshop);
    }

    toggleEvents(){
        this._events = !(this._events);
    }

    toggleCouponCode(){
        this._couponCode = !(this._couponCode);
    }

    toggleSubmitBlog(){
        this._submitBlog = !(this._submitBlog);
    }

    get involvements(){
        return [(this.submitCourse ? "submit_course" : null),
            (this.podcastYoutubeGuest ? "podcast_youtube_guest" : null),
            (this.workshop ? "workshop" : null),
            (this.events ? "events" : null),
            (this.couponCode ? "coupon_code" : null),
            (this.submitBlog ? "submit_blog" : null)
        ].filter(function (involvement){
            return involvement != null;
        })
    }
}

module.exports = { BusinessUserInvolvements }