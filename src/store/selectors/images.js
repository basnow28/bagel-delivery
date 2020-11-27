import { createSelector } from "reselect"
import * as _ from 'lodash'

export const selectImages = state => state.images

export const selectImageByKey = key => createSelector(selectImages, images => {
    const results = _.get(images, 'results')
    const image = _.filter(results, result => _.find(_.get(result, 'slugs'), slug => slug == key));
    return _.get(image, '0.data.image.url')
})