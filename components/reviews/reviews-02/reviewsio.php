<?php

use Exception;

/**
 * Allow reviews to be pulled for a certain store from the Reviews.co.uk API. Reviews
 * then get stored within a reviews.json file which can then be read within your 
 * site and the contents outputted.
 */
class ReviewsIO
{
	/**
	 * rioStoreID
	 * The ID number or name of the reviews.io account
	 *
	 * @var string|int
	*/
	public $rioStoreID = null;

	/**
	 * Main API Url for reviews.io
	 *
	 * @var string
	 */
	public $rioAPIUrl = "https://api.reviews.co.uk/";

	/**
	 * API Key for the account to access. Required if posting to their
	 * platform.
	 *
	 * @var [type]
	 */
	public $rioAPIKey = null;
	
	/**
	 * class __construct()
	 * 
	 * $apiKey is not required for this to work. Future versions, may allow this
	 * script to be expanded to manage reviews within the WP Admin panel.
	 *
	 * @param string|int $apiKey
	 */
	public function __construct($apiKey = "")
	{	
		$this->rioAPIKey = $apiKey;
	}

	/**
	 * Set the store ID to fetch from the API
	 * Can be either string or integer
	 * @param string|int $id
	 * @return string|int
	 */
	public function setStoreID($id = '')
	{
		return $this->rioStoreID = $id;
	}

	/**
	 * Fetch a file using cURL.
	 *
	 * @param string $path
	 * @return void
	 */
	public static function getFile($path = "")
	{
		try {
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $path);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
			$data = curl_exec($ch);
			$errNo = curl_errno($ch);
			curl_close($ch);
			if ($errNo) {
				return $errNo;
			}
			return $data;
		} catch(Exception $e) {
            trigger_error(
                sprintf(
                    'Curl failed with error #%d: %s',
                    $e->getCode(), $e->getMessage()
                ),
                E_USER_ERROR
            );
        }
	}

	/**
	 * Set the correct API Url to call
	 *
	 * @return string
	 */
	public function rioAPIUrl($type = 'latest')
	{
		$url = null;
		switch($type) :
			default: 
				$url = $this->rioAPIUrl . 'merchant/latest' . '?store=' . $this->rioStoreID;
				break;
			case 'latest':
				$url = $this->rioAPIUrl . 'merchant/latest' . '?store=' . $this->rioStoreID;
				break;
			case 'short':
				$url = $this->rioAPIUrl . 'merchant/reviews' . '?apikey='. $this->rioAPIKey . '&store=' . $this->rioStoreID;
				break;
		endswitch;

		return $url;
	}

	/**
	 * Get the reviews from reviews.json. Due to restrictions, we have to supply
	 * both an absolute URL and a relative url. This allows us to check for the
	 * existance of the reviews.json file and create/update if required.
	 *
	 * @return void
	 */
	public function getReviews()
	{
		$cacheFileLocal = get_stylesheet_directory() . '/reviews/reviews.json';
		$cacheFile = get_stylesheet_directory_uri() . '/reviews/reviews.json';
		$expires = strtotime('+1 day');
		$results = $this->fetchReviewsFromAPI();

		/**
		 * If the file does not exist, we create it and then put the data into
		 * the newly created file. This is then returned using a cURL request.
		 */
		if ( file_exists($cacheFileLocal) === false) {
			if($results) {
				$f = fopen($cacheFileLocal, 'w') or die ('File not available');
				fwrite($f, $results);
				fclose($f);
				return $this::getFile($cacheFile);
			}
		} 

		/**
		 * Check to see if our file exists and it's older than a day. If it is older
		 * then we update it with a new call to the API. We return the result
		 * with a cURL request.
		 */
		if( filemtime($cacheFileLocal) < $expires && ($this::getFile($cacheFile) !== 3 || $this::getFile($cacheFile) != '')) {
			if($results) {
				$f = fopen($cacheFileLocal, 'w') or die ('File not available');
				fwrite($f, $results);
				fclose($f);
				return $this::getFile($cacheFile);
			}
		} 

		/**
		 * If everything above is fine, we simply return our cached file with the
		 * latest reviews in.
		 */
		return $this::getFile($cacheFile);
	}

	/**
	 * Perform request to API to fetch all reviews
	 *
	 * @return void
	 */
	public function fetchReviewsFromAPI()
	{
		return $this::getFile($this->rioAPIUrl('latest'));
	}
}