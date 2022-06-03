import { v4 as uuidv4 } from 'uuid'

class Number {
  /**
   * Get id alphanumeric.
   * Use uuid librery to get id
   * @returns {String} - Id alphanumeric
   */
  static randomNumber() {
    return uuidv4()
  }
}

export { Number }
