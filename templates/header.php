<header class="banner container" role="banner">
    <div id="" title="Menu" class="active left-off-canvas-toggle"><i class="fa fa-bars"></i></div>

    <div class="row left-off-canvas-menu">
        <div class="inner-off-canvas">
            <a class="brand" href="<?php echo home_url('/') ?>"><?php bloginfo('name'); ?></a>
            <nav class="nav-main" role="navigation">
                <?php
                    if (has_nav_menu('primary_navigation')) :
                        wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav nav-pills'));
                    endif;
                ?>
            </nav>
        </div>
    </div>
</header>
