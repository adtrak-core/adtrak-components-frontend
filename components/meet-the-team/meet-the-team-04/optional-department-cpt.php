// Register Custom Taxonomy
function register_department_taxonomy() {

	$labels = array(
		'name'                       => _x( 'Departments', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'Department', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'Department', 'text_domain' ),
		'all_items'                  => __( 'All Departments', 'text_domain' ),
		'parent_item'                => __( 'Parent Department', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Department:', 'text_domain' ),
		'new_item_name'              => __( 'New Department Name', 'text_domain' ),
		'add_new_item'               => __( 'Add New Department', 'text_domain' ),
		'edit_item'                  => __( 'Edit Department', 'text_domain' ),
		'update_item'                => __( 'Update Department', 'text_domain' ),
		'view_item'                  => __( 'View Department', 'text_domain' ),
		'separate_items_with_commas' => __( 'Separate Departments with commas', 'text_domain' ),
		'add_or_remove_items'        => __( 'Add or remove Departments', 'text_domain' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'text_domain' ),
		'popular_items'              => __( 'Popular Departments', 'text_domain' ),
		'search_items'               => __( 'Search Departments', 'text_domain' ),
		'not_found'                  => __( 'Not Found', 'text_domain' ),
		'no_terms'                   => __( 'No Departments', 'text_domain' ),
		'items_list'                 => __( 'Departments list', 'text_domain' ),
		'items_list_navigation'      => __( 'Departments list navigation', 'text_domain' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
	);
	register_taxonomy( 'department', array( 'team-members' ), $args );

}
add_action( 'init', 'register_department_taxonomy', 0 );